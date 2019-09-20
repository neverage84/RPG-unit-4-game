
    var Pikachu = {
        HP: 400,
        Attack: 7,
        CounterAttack: 14,
    }
    
    var Charmander = {
        HP: 325,
        Attack: 10,
        CounterAttack: 20,
    }
    var Bulbasaur = {
        HP: 475,
        Attack: 4,
        CounterAttack: 8,
    }
    var Squirtle = {
        HP: 550,
        Attack: 2,
        CounterAttack: 4,
    }
    
    var FighterName = "";
    var HealthPoints = 0;
    var AttackPower = 0;
    var CounterPower = 0;
    var DefenderName = "";
    var E_HealthPoints = 0;
    var E_AttackPower = 0;
    var E_CounterPower = 0;
    var Count = 0;
    $("#Pikachu").val(Pikachu);
    $("#Bulbasaur").val(Bulbasaur);
    $("#Charmander").val(Charmander);
    $("#Squirtle").val(Squirtle);


    function Reset(){
        FighterName = "";
        HealthPoints = 0;
        AttackPower = 0;
        CounterPower = 0;
        DefenderName = "";
        E_HealthPoints = 0;
        E_AttackPower = 0;
        E_CounterPower = 0;
        Count = 0;
        $(".Reset").show();
        $(".Reset").addClass("Character");
        $(".Character").removeClass("Enemy");
        $(".Character").removeClass("Final");
        $(".Character").removeClass("Selected");
        $(".Character").appendTo(".PokemonChoice");
        $("#GameStats").empty();
        $("#Original").appendTo("#GameStats");

    };
    function playSound() {
        var sound = document.getElementById("audio");
        sound.play();
    };
    function playPunchSound() {
        var sound = document.getElementById("punch");
        sound.play();
    };
    $(".Character").on("click",function () {

        if (HealthPoints !== 0 && E_HealthPoints < 1) {
            console.log(HealthPoints);
            $(this).appendTo("#SelectedDefender");
            $(this).addClass("Final");
             E_HealthPoints = ($(this).val().HP);
            E_AttackPower = ($(this).val().Attack);
            E_CounterPower = ($(this).val().CounterAttack); 
            DefenderName = ($(this).attr("id"));
            console.log($(this).attr("class"));
            $("#GameStats").text(FighterName + " HP: " + HealthPoints + "  |  " + DefenderName + " HP: " + E_HealthPoints); 
            playSound();

        }


          else if (HealthPoints === 0) {
          $(this).appendTo("#SelectedAttacker");
          $(this).addClass("Selected");
          $(this).removeClass("Character");
          $(".Character").addClass("Enemy");
          $(".Enemy").removeClass("Character");
          $(".Enemy").appendTo("#EnemyPick");
          HealthPoints = ($(this).val().HP);
          AttackPower = ($(this).val().Attack);
          CounterPower = ($(this).val().CounterAttack);
          FighterName = ($(this).attr("id"));
          $("#GameStats").text(FighterName + " HP: " + HealthPoints);
          console.log($("#Bulbasaur").attr("class"));
          playSound();
          
          
         }
         
        
         

          
          
          
          //remove character class from this.
          //Append all .character to Enemy.
    
    });

    $("#AttackButton").on("click",function(){
        if (HealthPoints !== 0 && E_HealthPoints !== 0) {

        var attack = $(".Selected").val().Attack;
        E_HealthPoints -= AttackPower;
        HealthPoints -= E_CounterPower;
        AttackPower += attack;
       
        
        playPunchSound();
        $("#GameStats").html(FighterName + " HP: " + HealthPoints + " | " + DefenderName + " HP: " + E_HealthPoints + "<br>" + " You attacked " + DefenderName + " for " + AttackPower + " damage. " + "<br>" + DefenderName + " attacked you for " + E_CounterPower + " damage.");    
        
        if (Count < 3) {
                if (HealthPoints < 1) {
                $("#GameStats").text(DefenderName + " defeated " + FighterName + "!!!");
                }
                else if (E_HealthPoints < 1) {

                $(".Final").hide();
                Count += 1; 
                if (Count === 3) {
                    $("#GameStats").text(FighterName + " wins!!!");  
                    }
                else  { alert("Click a new Enemy");
                
                 
                }
                }
            }
            
        }

        }
     );

    $("#ResetButton").on("click",function(){
        Reset();
   
    });
    

    
    
        
        
       
  
    
    
    
    
    

   