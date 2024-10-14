//THIS CALCULATOR IS ON PATCH 13.19 AS OF 10/9/23!!!!!!!!
//var for mouseclickmethod
var magicKaynNumber = 0;

// VAR INITIALIZATION HERE.
// picture of Kayn (regular)
var kayn = new WebImage("https://codehs.com/uploads/d864b8e718d8390df67928007584f210");
kayn.setSize(150, 200);
kayn.setPosition(0, 300);
add(kayn);

//picture of Shadow Assassin
var shadow = new WebImage("https://codehs.com/uploads/72733fc9a1deb33b3c24146c1911f7e1");
shadow.setSize(150, 200);
shadow.setPosition(getWidth() / 4, 300);
add(shadow);

//Adds picture of Rhaast 
var rhaast = new WebImage("https://codehs.com/uploads/7e8c403081fcf6bd99775011c94da8f8");
rhaast.setSize(150, 200);
rhaast.setPosition(getWidth() / 1.5, 300);
add(rhaast);

//Picture of Duskblade
var duskblade = new WebImage("https://codehs.com/uploads/785680aa1a52b66b6b1c06d93d021c9c");
duskblade.setSize(70,70);
duskblade.setPosition(getWidth() / 20, 30);


//Picture of Seryldas
var seryldas = new WebImage("https://codehs.com/uploads/824b234c89f330fbe6d32ac061e56567");
seryldas.setSize(70,70);
seryldas.setPosition(getWidth() / 4, 30);


//Picture of Youmuus
var youmuus = new WebImage("https://codehs.com/uploads/bde17903a668688db1f3f0c7f9387127");
youmuus.setSize(70,70);
youmuus.setPosition(getWidth() / 2.2, 30);


//Picture of Chempunk
var chempunk = new WebImage("https://codehs.com/uploads/3da02d56558f6a3a8b309612f32837c6");
chempunk.setSize(70,70);
chempunk.setPosition(getWidth () / 20, 120);


//Picture of Axiom
var axiom = new WebImage("https://codehs.com/uploads/0ded5b10c4f89c7e326c5b68ae35a42e");
axiom.setSize(70,70);
axiom.setPosition(getWidth() / 4, 120);


//Picture of blue pet
var bluePet = new WebImage("https://codehs.com/uploads/55f563fcdd87a59db24e4b1dc026405b");
bluePet.setSize(70, 70);
bluePet.setPosition(getWidth() / 2.2, 120);


//Welcome screen
var welcome = new WebImage("https://codehs.com/uploads/7de1fb3711af1e436f4ab5170c8099dc");
welcome.setSize(getWidth(), 300);
welcome.setPosition(0, 0);
add(welcome);

//text for welcome screen
var welcomeText = new Text("Welcome to Kayn", "30pt Arial");
welcomeText.setPosition(0, 100);
welcomeText.setColor(Color.white);
add(welcomeText);

// click to begin words
var beginText = new Text("click to add items to your inventory!", "15pt Arial");
beginText.setPosition(0, getHeight() / 2)
beginText.setColor(Color.black);

var clickUpText = new Text("click S to see stats!", "15pt Arial");
clickUpText.setPosition(0, getHeight() / 1.8)
clickUpText.setColor(Color.black);
//word calculator
var welcomeText2 = new Text("Calculator!", "30pt Arial");
welcomeText2.setPosition(0, 200);
welcomeText2.setColor(Color.white);
add(welcomeText2);
//move speed set 0
var moveSpeed = 0;

//health stats set 0 
var hitPoints = 0;
var hitPointsRegen = 0;

//defense stats set 0 
var armor = 0;
var magicResist = 0;

//resources stats set 0 
var mana = 0;
var manaRegenPerSec = 0;
var abilityHaste = 0;
//damage stats set 0
var attackPower = 0;
var abilityPower = 0;
var trueDamage = 0;
var lethality = 0;
var AD = 0;

//Duskblade stats

//youmuus stats

//serylda stats

//chempunk stats

//axiom stats

//blue pet stats


var levelTwelveNotice = new Text("These stats are at base kayn level 12!", "15pt Arial");
levelTwelveNotice.setPosition(0, 50)

var AD = new Text("Your ad is: 382.6", "15pt Arial");
AD.setPosition(0, 80);

var lethality = new Text("Your lethality is: 54", "15pt Arial");
lethality.setPosition(0, 110);

var abilityH = new Text("Your ability haste is: 85", "15pt Arial");
abilityH.setPosition(0, 140);

var armorPen = new Text("Your armor pen is: 30%", "15pt Arial");
armorPen.setPosition(0, 170);

var antiH = new Text("You have anti-heal!", "15pt Arial");
antiH.setPosition(0, 200);

var antiHCont = new Text("Percentage: 40% anti heal", "15pt Arial");
antiHCont.setPosition(0, 220);

// Click begin words
var randomColor = Randomizer.nextColor();
    var begin = new Text("Click key down to begin!", "15pt Arial");
    begin.setPosition(75,270);
    begin.setColor(randomColor);
    add(begin);

// Item bar for click begin
var itemBar = new WebImage("https://codehs.com/uploads/5a58a1fc314dd6cdda280b9adaeb9091")
itemBar.setSize(200, 180);
itemBar.setPosition(getWidth() / 6, 300);

function clickBegin(){
    removeAll();
    add(duskblade);
    add(youmuus);
    add(seryldas);
    add(chempunk);
    add(axiom);
    add(bluePet);
    add(beginText);
    add(itemBar);
    add(clickUpText);
    magicKaynNumber = 2;
}

//click to add items function
function addItems(){
    var duskblade = new WebImage("https://codehs.com/uploads/785680aa1a52b66b6b1c06d93d021c9c");
    duskblade.setSize(50,50);
    duskblade.setPosition(65, 325);
    add(duskblade);
    var seryldas = new WebImage("https://codehs.com/uploads/824b234c89f330fbe6d32ac061e56567");
    seryldas.setSize(50,50);
    seryldas.setPosition(115, 325);
    add(seryldas);
    var youmuus = new WebImage("https://codehs.com/uploads/bde17903a668688db1f3f0c7f9387127");
    youmuus.setSize(50,50);
    youmuus.setPosition(155, 325);
    add(youmuus);
    var chempunk = new WebImage("https://codehs.com/uploads/3da02d56558f6a3a8b309612f32837c6");
    chempunk.setSize(50,50);
    chempunk.setPosition(65, 375);
    add(chempunk);
    var axiom = new WebImage("https://codehs.com/uploads/0ded5b10c4f89c7e326c5b68ae35a42e");
    axiom.setSize(50,50);
    axiom.setPosition(115, 375);
    add(axiom);
    var bluePet = new WebImage("https://codehs.com/uploads/55f563fcdd87a59db24e4b1dc026405b");
    bluePet.setSize(50, 50);
    bluePet.setPosition(165, 375);
    add(bluePet);


}

function statsAll(e){
    if(e.keyCode == Keyboard.letter('S')){
    removeAll();
    add(levelTwelveNotice);
    add(AD);
    add(lethality);
    add(abilityH);
    add(armorPen);
    add(antiH);
    add(antiHCont);
}
}

function start(){
    println("Welcome to Kayn Calculator! ");
    println("");
    println(" Kill the body, build the body, free the body.");
    println("");
    
// mouseclickmethods

    keyDownMethod(clickBegin);
    mouseClickMethod(addItems);
    keyUpMethod(statsAll);

    //Will add pictures / items after Click to Begin
    if(clickBegin){
        var kaynForm = readLine("What form would you like to go? Choose from Kayn, Rhaast, or Shadow Assassin: ");
        println("Here are your abilities as the one and only " + kaynForm + ": ");
    }

    
    //if statement for Kayn (regular)
    if (kaynForm == "Kayn" || "kayn"){
        println("");
        println("Passive - The Darkin Scythe - Kayn has a secondary experience bar that tracks progress towards his Rhaast and Shadow"); 
        println("Assassin forms. He gathers orbs from champion takedowns and");
        println("each instance of damage (excluding damage over time)");
        println("dealt against champions. Once he has earned enough orbs, he");
        println("unlocks a form based on whether he earned more from melee or");
        println("ranged champions (for Rhaast and Shadow Assassin respectively) with the other form unlocked later.");
        println("");
        println("");
        println("Kayn can move near the summoning platform to transform over 6 seconds, where he restores full health and mana, during which he is invulnerable ");
        println("Q - Reaping Slash - Kayn dashes in the target diretion, deali-ng physical damage to enemies he passes through. He then swin-"); 
        println("gs his scythe, dealing the same damage to nearby enemies.");
        //end Q ability Kayn
        println("");
        println("W - Blades Reach - Kayn swings his scythe in the target"); 
        println("direction, dealing physical damage to enemies hit, and slowing them by 90% decaying over 1.5 seconds.");
        //end W ability Kayn
        println("");
        println("E - Shadow Step - Kayn gains 40% total movespeed, ghosting and the ability to ignore terrain collision. If he has been");
        println("in combat with enemy champions within the last three seconds, Shadow Step will instead last 1.5 seconds.");
    }
}
