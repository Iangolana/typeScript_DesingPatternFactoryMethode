class Factory implements IHuman{
    getPerson(type : PersonType){
        switch(type){
            case PersonType.man : return new Man();
            case PersonType.woman : return new Woman();
            default : return new TransGender();
        }
    }
}