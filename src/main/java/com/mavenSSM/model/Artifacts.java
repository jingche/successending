package com.mavenSSM.model;

import java.util.Date;

public class  Artifacts {
    private Integer id;

    private String owner;

<<<<<<< HEAD
    private String started_date;

    private String finished_date;
=======
    private Date started_date;

    private Date finished_date;
>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1

    private Integer used_days;

    private String category;

    private String description;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String Owner) {
        this.owner = Owner;
    }

<<<<<<< HEAD
    public String getStarted_date() {
        return started_date;
    }

    public void setStarted_date(String Started_date) {
        this.started_date = Started_date;
    }

    public  String getFinished_date() {
        return finished_date;
    }

    public void setFinished_date(String Finished_date) {
=======
    public Date getStarted_date() {
        return started_date;
    }

    public void setStarted_date(Date Started_date) {
        this.started_date = Started_date;
    }

    public  Date getFinished_date() {
        return finished_date;
    }

    public void setFinished_date( Date Finished_date) {
>>>>>>> 2358d0961dccc0bad857e047bbfb0dd1801d40a1
        this.finished_date = Finished_date;
    }

    public Integer getUsed_days() {
        return  used_days;
    }

    public void setUsed_days(Integer  Used_days) {
        this. used_days =  Used_days;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String Category) {
        this.category= Category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String Description) {
        this.description = Description;
    }

     
}