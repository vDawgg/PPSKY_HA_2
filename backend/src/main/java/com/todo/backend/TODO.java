package com.todo.backend;

public class TODO {
    private int id;
    private String text;
    private String date;
    private int progress;

    public TODO(int id, String text, String date, int progress) {
        this.id = id;
        this.text = text;
        this.date = date;
        this.progress = progress;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getProgress() {
        return progress;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }
}
