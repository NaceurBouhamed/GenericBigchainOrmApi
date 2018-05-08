var User = function (info) {
    this.firstname = info.firstname;
    this.lastname = info.lastname;
    this.picURL = info.picURL;
    this.address = info.address;
    this.phonenumber = info.phonenumber;
    this.sex = info.sex;
    this.maritalstatus = info.maritalstatus;
    this.occupation = info.occupation;
    this.email = info.email;
    this.referral = info.referral;
    this.publicKey = info.publicKey;
    } 

User.prototype.data = {}

module.exports = User;
