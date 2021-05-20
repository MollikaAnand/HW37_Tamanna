class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    //var contestantIndex = "contestantCount" + this.index;
   var contestantIndex = "contestants/contestant" + this.index;
   //var contestantIndex = "contestants/contestant" + this.index; 
   database.ref(contestantIndex).update({
      name:this.name,
      answer:this.answer
    });
    console.log(this.index);
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}
