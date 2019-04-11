let Person = function (name,gender,weight) {
    this.setPartner = function (partner) {
        this.partner = partner;
    };
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.greeting = function () {
        return "Hi! I'm " + this.name + '. Nice to meet you!'
    };
    this.alreadyAte = false;
    this.getName = function () {
        document.getElementById(this.partner.name + 'Name').value = this.partner.name;
    };
    this.getGender = function () {
        document.getElementById(this.partner.name + 'Gender').value = this.partner.gender;
    };
    this.getWeight = function () {
        document.getElementById(this.partner.name + 'Weight').value = this.partner.weight;
    };
    this.checkApple = function () {
        alert('Apple Weight is ' + Apple.getWeight());
    };
    this.eatApple = function () {
        if (!this.alreadyAte && this.partner.alreadyAte && Apple.getWeight()>0){
            Apple.decreaseWeight();
            this.weight++;
            document.getElementById(this.name + 'Weight').value = this.weight;
            this.alreadyAte = true;
            this.partner.alreadyAte = false;
        }
    }

};
let Apple ={
    weight: 10,
    getWeight:function () {
        return this.weight
    },
    decreaseWeight: function () {
        this.weight--
        document.getElementById('AppleWeight').innerHTML = this.getWeight()
    }
};
let adam = new Person('Adam','Male',75);
let eva = new Person('Eva','Female',60);
adam.setPartner(eva);
eva.setPartner(adam);
adam.alreadyAte = true;
document.getElementById('AppleWeight').innerHTML = Apple.weight;
document.getElementById('AdamName').value = adam.name;
document.getElementById('EvaName').value = eva.name;