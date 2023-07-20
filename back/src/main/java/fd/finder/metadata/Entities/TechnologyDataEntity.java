package fd.finder.metadata.Entities;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "technology_data")
public class TechnologyDataEntity {
    @Id
    private String id;

    private String technologyName;
    private String field_name;
    private String path_string;
    private String type;
    private String alimentation;
    private String usages;

    @CreatedDate
    private Date addedDate;


    public TechnologyDataEntity() {
    }

    public TechnologyDataEntity(String id, String technologyName, String field_name, String path_string, String type, String alimentation, String usages, Date addedDate) {
        this.id = id;
        this.technologyName = technologyName;
        this.field_name = field_name;
        this.path_string = path_string;
        this.type = type;
        this.alimentation = alimentation;
        this.usages = usages;
        this.addedDate = addedDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTechnologyName() {
        return technologyName;
    }

    public void setTechnologyName(String technologyName) {
        this.technologyName = technologyName;
    }

    public String getField_name() {
        return field_name;
    }

    public void setField_name(String field_name) {
        this.field_name = field_name;
    }

    public String getPath_string() {
        return path_string;
    }

    public void setPath_string(String path_string) {
        this.path_string = path_string;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAlimentation() {
        return alimentation;
    }

    public void setAlimentation(String alimentation) {
        this.alimentation = alimentation;
    }

    public String getUsages() {
        return usages;
    }

    public void setUsages(String usages) {
        this.usages = usages;
    }

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }
}
