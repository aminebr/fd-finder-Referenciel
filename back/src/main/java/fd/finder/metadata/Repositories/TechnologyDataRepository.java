package fd.finder.metadata.Repositories;

import fd.finder.metadata.Entities.TechnologyDataEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TechnologyDataRepository extends MongoRepository<TechnologyDataEntity, String> {
    List<TechnologyDataEntity> findByTechnologyName(String technologyName);
}
