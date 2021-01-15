class Man implements IHuman{
    private  gender : string;
    
    getGender() :string 
    {
        this.gender = "male" ;
        return this.gender;
    }
}
