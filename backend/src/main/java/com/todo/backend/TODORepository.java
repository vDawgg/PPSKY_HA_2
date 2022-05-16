package com.todo.backend;

import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TODORepository extends MongoRepository<TODO, String> {

    public TODO findById(int id);

    //Might have to be more specific -> What if user tries to delete non-existent todos?
    public void deleteById(int id);
}
