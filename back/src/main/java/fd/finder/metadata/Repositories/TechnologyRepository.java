package fd.finder.metadata.Repositories;

import fd.finder.metadata.Entities.TechnologyDataEntity;
import fd.finder.metadata.Entities.TechnologyEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TechnologyRepository extends MongoRepository<TechnologyEntity, String> {


}