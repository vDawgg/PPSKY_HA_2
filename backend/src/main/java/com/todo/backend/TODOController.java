package com.todo.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TODOController {

    @GetMapping("allTodos")
    public TODO[] allTodos() {
        return null;
    }

    @GetMapping("todo")
    public TODO todo(@RequestParam("id") int id) {
        return new TODO(id, "Backend fertig machen", "2022/13/05", 0);
    }

    //Post a todo
    @PostMapping("todos")
    public boolean addTODO() {
        return false;
    }

    //Delete an existing todo
    @GetMapping("delete")
    public boolean delete(@RequestParam("id") int id) {
        return false;
    }

    //Edit an existing todo
    @PostMapping("edit")
    public TODO edit(@RequestParam("id") int id) {
        return null;
    }

}
