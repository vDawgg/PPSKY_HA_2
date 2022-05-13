package com.todo.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.*;

@RestController
@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = TODORepository.class)
public class TODOController {

    @Autowired
    private TODORepository repository;

    //Get all todos
    @GetMapping("allTodos")
    public TODO[] allTodos() {
        return null;
    }

    //Get specific todos
    @GetMapping("todo")
    public TODO todo(@RequestParam("id") int id) {
        return repository.findById(id);
    }

    //Post a todo
    @PostMapping("todo")
    public boolean addTODO(@RequestBody TODO todo) {
        try {
            repository.save(todo);
            return true;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }

    //Delete an existing todo
    @GetMapping("delete")
    public boolean delete(@RequestParam("id") int id) {
        repository.deleteById(id);
        return true;
    }

    //Edit an existing todo
    @PostMapping("edit")
    public TODO edit(@RequestBody TODO todo) {
        return repository.save(todo);
    }
}
