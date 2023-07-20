package fd.finder.metadata.Controllers;

import fd.finder.metadata.Entities.TechnologyDataEntity;
import fd.finder.metadata.Repositories.TechnologyDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/technologies/{technologyName}")
@CrossOrigin("*")
public class TechnologyDataController {

    @Autowired
    TechnologyDataRepository technologyDataRepository;

    @GetMapping
    public List<TechnologyDataEntity> getTechnologyDataByTechnologyName(@PathVariable String technologyName) {
        return technologyDataRepository.findByTechnologyName(technologyName);
    }

    @PostMapping
    public TechnologyDataEntity addTechnologyData(@PathVariable String technologyName,
                                            @RequestBody TechnologyDataEntity technologyData) {
        technologyData.setTechnologyName(technologyName);
        return technologyDataRepository.save(technologyData);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TechnologyDataEntity> updateTechnologyData(@PathVariable String technologyName,
                                                                     @PathVariable String id,
                                                                     @RequestBody TechnologyDataEntity updatedData) throws Exception {
        TechnologyDataEntity technologyData = technologyDataRepository.findById(id)
                .orElseThrow(() -> new Exception("Technology data not found with id: " + id));

        if (!technologyData.getTechnologyName().equals(technologyName)) {
            throw new IllegalArgumentException("Technology data does not belong to the specified technology.");
        }

        technologyData.setField_name(updatedData.getField_name());
        technologyData.setPath_string(updatedData.getPath_string());
        technologyData.setType(updatedData.getType());
        technologyData.setAlimentation(updatedData.getAlimentation());
        technologyData.setUsages(updatedData.getUsages());

        TechnologyDataEntity updatedTechnologyData = technologyDataRepository.save(technologyData);
        return ResponseEntity.ok(updatedTechnologyData);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTechnologyData(@PathVariable String technologyName,
                                                     @PathVariable String id) throws Exception {
        TechnologyDataEntity technologyData = technologyDataRepository.findById(id)
                .orElseThrow(() -> new Exception("Technology data not found with id: " + id));

        if (!technologyData.getTechnologyName().equals(technologyName)) {
            throw new IllegalArgumentException("Technology data does not belong to the specified technology.");
        }

        technologyDataRepository.delete(technologyData);
        return ResponseEntity.noContent().build();
    }

    
}
