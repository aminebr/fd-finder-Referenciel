package fd.finder.metadata.Controllers;

import fd.finder.metadata.Entities.TechnologyEntity;
import fd.finder.metadata.Repositories.TechnologyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/technologies")
@CrossOrigin("*")
public class TechnologyController {

    @Autowired
    TechnologyRepository technologyRepository;

    @GetMapping
    public List<TechnologyEntity> getAllTechnologies() {
        return technologyRepository.findAll();
    }

    @PostMapping
    public TechnologyEntity addTechnology(@RequestBody TechnologyEntity technology) {
        return technologyRepository.save(technology);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TechnologyEntity> editTechnology(@PathVariable String id, @RequestBody TechnologyEntity updatedTechnology) throws Exception {
        TechnologyEntity technology = technologyRepository.findById(id)
                .orElseThrow(() -> new Exception("Technology not found with id: " + id));

        technology.setName(updatedTechnology.getName());
        technology.setImage(updatedTechnology.getImage());

        TechnologyEntity updatedTech = technologyRepository.save(technology);
        return ResponseEntity.ok(updatedTech);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTechnology(@PathVariable String id) throws Exception {
        TechnologyEntity technology = technologyRepository.findById(id)
                .orElseThrow(() -> new Exception("Technology not found with id: " + id));

        technologyRepository.delete(technology);
        return ResponseEntity.noContent().build();
    }
}
