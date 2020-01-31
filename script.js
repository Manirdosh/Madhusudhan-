function showCategory(s1, s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";
    if(s1.value == "vegetable"){
        var optionArray = [
        "choose_vegetable|Choose Vegetable-तरकारी छान्नुहोस्",
        "crucifer|Crucifer and Oilseed-फुलगोबी र तेलबाली",
        "legumes|Legumes-कोषेबाली",
        "cucurbits|Cucurbits-लहरे बाली",
        "tomato|Tomato & Potato-टमाटर र आलु",
        "brinjal|Brinjal-चिप्ले भिंडी", 
        "cotton|Cotton & Okra-कपास र भिंडी", 
        "chilly|Chilly-खुर्सानी",
        "onion|Onion-प्याज"
     ];
    }else if(s1.value == "fruits"){
     var optionArray = [
        "choose_fruits|Choose Fruits-फलफुल छान्नुहोस्",
        "temperate-fruit|Temperate Fruit-समशीतोष्ण फल",
         "mango|Mango-आप",
         "pomegranate|Pomegranate-अनार",  
         "litchi|Litchi-लिची",
         "banana|Banana-केरा",
         "citrus|Citrus-सिट्रस परिवार",
         "coffee|Coffee-कफी",  
         "tea|Tea-चिया",  
         "cardamom|Cardamom-अलैंची"
     ];
    }else if(s1.value == "cereal"){
     var optionArray = [
        "choose_cereal|Choose Cereal Crops-खाध्यवाली छान्नुहाेस",
         "rice|Rice-धान ",
         "maize|Maize-मकै",
         "wheat|Wheat-गहुँ "
     ];
 }else if(s1.value == "cashcrop"){
     var optionArray = [
        "choose_cash|Choose Cash Crops-नगदेबाली छान्नुहाेस",
         "sugarcane|Sugarcane (उखु)",
         "jute|Jute-जुट"
     ];
 }


    for(var option in optionArray){
     var pair = optionArray[option].split("|");
     var newOption = document.createElement("option");
     newOption.value = pair[0];
     newOption.innerHTML = pair[1];
     s2.options.add(newOption);
    }

 }

 function showPest(c1, c2){
    var c1 = document.getElementById(c1);
    var c2 = document.getElementById(c2);

    c2.innerHTML = "";

    if(c1.value == "crucifer"){
        var pestArray = [
            "crucifer1|Cabbage Butterfly-बन्दाको पुतली",
            "crucifer2|Diamond Black Moth-इटबुट्टे पुतली",
            "crucifer3|Cabbage Flea bettle-उफ्रने खपटे",
            "crucifer4|Mustard SawFly-तोरीको करौते किरा",
            "crucifer5|Mustard Aphid-तोरीको लाही किरा",
            "crucifer6|Cutworms-फेद काट्ने किरा",
            "crucifer7|Tobacco Caterpillar-सुर्तीको पात खाने लार्भा"
        ];
    }else if(c1.value == "legumes"){
        var pestArray = [
            "legumes1|Chickpea pod borer-चनाको कोशाको गवारो",
            "legumes2|Soybean Hairy Caterpillar-भटमासको झुसिलकिरो",
            "legumes3|Pea leaf miner-केराउको पात खन्ने किरा",
            "legumes4|Cowpea Pod borer-बोडीको कोशाको गवारो",
            "legumes5|Spotted pod borer-कोषाको थोप्ले गवारो",
            "legumes6|Semilooper-अर्धलुपर",
            "legumes7|Cowpea aphid/ blackbean aphid-लाही किरा",
            "legumes8|Legume pod bug-",
            "legumes9|Pest stem fly-केराउको काण्डको झिंगा"
        ];
    }else if(c1.value == "cucurbits"){
        var pestArray = [
            "cucurbits1|Red pumpkin bettle-फर्सीको रातो खपटे",
            "cucurbits2|Cucurbit stink bug-गन्हाउने पतेरो",
            "cucurbits3|Pumpkin fruit fly-फर्सीको फल खाने औँसा",
            "cucurbits4|Spotted bettle-थोप्ले खपटे"
        ];
    }else if(c1.value == "tomato"){
        var pestArray = [
            "tomato1|Tomato fruit borer-गोलभेडाको फलको गवारो",
            "tomato2|Potato tuber moth-आलुको पुतली",
            "tomato3|Red ant-रातो कमिला",
            "tomato4|Whitefly-सेतो झिडा",
            "tomato5|jassid-फड्के किरा",
            "tomato6|Aphid-लाही किरा",
            "tomato7|Peal leaf miner-",
            "tomato8|Tomato leaf miner-गोलभेडाको पात खन्ने किरा",
            "tomato9|Cutworms-"
        ];
    }
    else if(c1.value == "brinjal"){
        var pestArray = [
            "brinjal1|Brinjal Shoot & Fruit Borer-भेन्टाको फल तथा काण्डको गवारो",
            "brinjal2|Brinjal Leaf Folder-पात बटार्ने किरा",
            "brinjal3|Brinjal Leaf Webber-पातको जाले किरा",
            "brinjal4|Spotted bettle-थोप्ले खपटे"
        ];
    }
    else if(c1.value == "cotton"){
        var pestArray = [
            "cotton1|Cotton Jassid-फड्के किरा",
            "cotton2|Cotton Aphid-कपासको लाही",
            "cotton3|Cotton Whitefly-सेतो झिडा",
            "cotton4|Red Cotton Bug-कपासको रातो पतेरो",
            "cotton5|Pink Bollworm-गुलाबी गवारो",
            "cotton6|Okra fruit & Shoot Borer-फल तथा काण्डको गवारो",
            "cotton7|American Bollworm-अमेरिकन गवारो"
        ];
    }
    else if(c1.value == "chilly"){
        var pestArray = [
            "chilly1|Chilly Thrips-खुर्सानीको चुसाहा किरा",
            "chilly2|Cutworms-फेद काट्ने किरा",
            "chilly3|Soybean Hairy Caterpillar-भटमासका झुसिलाकिरा",
            "chilly4|Tobacco caterpillar-सुर्तीको पात खाने लार्भा"
        ];
    }
    else if(c1.value == "onion"){
        var pestArray = [
            "onion1|Onion thrips-प्याजको चुसाहा किरा",
            "onion2|Onion maggot-प्याजको झिंगा"
        ];
    }
    else if(c1.value == "temperate-fruit"){
        var pestArray = [
            "temperate1|Tent caterpillar-पालन बनाउने लार्भा",
            "temperate2|Wooly Apple Aphid-भुवादार लाही",
            "temperate3|San Jose Scale-कत्ले किरा",
            "temperate4|Apple Stem Borer-काण्डको गवारो",
            "temperate5|Apple Root Borer-जराको गवारो",
            "temperate6|Peach Leaf Curl Aphid-आरुको पात बटार्ने किरा"
        ];
    }
    else if(c1.value == "mango"){
        var pestArray = [
            "mango1|Mango Hopper-फड्के किरा",
            "mango2|Mango Mealy Bug-मिलिबग",
            "mango4|Mango Leaf Webber-पातको जाले किरा",
            "mango5|Mango Stone Weevil-कोयाको घुन",
            "mango6|Mango Gall Psyllid-आपको साइलीड"
        ];
    }
    else if(c1.value == "pomegranate"){
        var pestArray = [
            "pomegranate1|Pomergranate Butterfly-अनारको पुतली",
            "pomegranate2|Bark Caterpillar-बोक्रा खाने लार्भा",
            "pomegranate3|Mealy Bug-मिलिबग",
            "pomegranate4|Whitefly-सेतोझिंडा",
            "pomegranate5|Aphid-लाही किरा"
        ];
    }
    else if(c1.value == "litchi"){
        var pestArray = [
            "litchi1|Litchi Bug-लिचीको पतेरो",
            "litchi2|Litchi Leaf Curl Mite-पात बटार्ने सुलसुले"
        ];
    }
    else if(c1.value == "banana"){
        var pestArray = [
            "banana1|Banana Rhizome & Pseudostem Weevil-केराको गानोको घुन",
            "banana2|Banana Skipper-केराको पुतली",
            "banana3|Banana Leaf and Fruit Scaring Bettle-पात र कोशामा दाग लागाउने खपटे",
            "banana4|Banana Aphid-केराको लाही"
        ];
    }
    else if(c1.value == "citrus"){
        var pestArray = [
            "citrus1|Citrus Psylla-सिट्रस सिल्ला",
            "citrus2|Citrus Green Stink Bug-सुन्तलाको पतेरो",
            "citrus3|Red Scale-रातो कत्ले किरो",
            "citrus4|Citrus Aphid-लाही किरा",
            "citrus5|Citrus Leaf Miner-पात खन्ने किरा",
            "citrus6|Citrus Mealy Bug-मिलिबग"
        ];
    }
    else if(c1.value == "coffee"){
        var pestArray = [
            "coffee1|Green scale of coffee-कत्ले किरा"
        ];
    }
    else if(c1.value == "tea"){
        var pestArray = [
            "tea1|Tea Mosquito Bug-चियाको पतेरो",
            "tea2|Scarlet Mite-रातो सुलसुले",
            "tea3|Red Spider Mite-रातो माकुरो सुलसुले",
            "tea4|Purple Mite-पर्पल सुलसुले"
        ];
    }
    else if(c1.value == "cardamom"){
        var pestArray = [
            "cardamom1|Leaf Eating Caterpillar-पात खाने लार्भा",
            "cardamom2|Banana Aphid-लाही किरा",
            "cardamom3|Cardamom Thrips-अलैचीको चुसाहा",
            "cardamom4|Cardamom Hairy Caterpillar-अलैचीको झुसिलकिरो"
        ];
    }
    else if(c1.value == "rice"){
        var pestArray = [
            "rice1|Brown Plant hopper-पहेलो फड्के किरो",
            "rice2|Yellow stem borer-धानको पहेलो गवारो",
            "rice3|Rice caseworm-केसवार्म",
            "rice4|Rice hispa-काडे खपटे",
            "rice5|Rice Gasshopper-धानको फट्यान्ग्रो",
            "rice6|Rice leaf folder-पात बटार्ने किरा",
            "rice7|Armyworm-फौजिकिरा",
            "rice8|Seed bed bettle-रिठ्ठे किरा",
            "rice9|Rice gall midge-डुंन्ग्रे किरा"
        ];
    }
    else if(c1.value == "maize"){
        var pestArray = [
            "maize1|Maize stem borer-मकैको गवारो",
            "maize2|Armyworm-फौजिकिरा",
            "maize3|Flower bettle-पुष्प खपटे",
            "maize4|cutworm-फेद काट्ने किरा",
            "maize5|Wireworm-किटकिटे खपटे",
            "maize6|American Fall Armyworm-अमेरिकी फौजिकिरा"
        ];
    }
    else if(c1.value == "wheat"){
        var pestArray = [
            "wheat1|Pink Borer-गुलावी गवारो",
            "wheat2|Termites-धमिरा",
            "wheat3|Wireworms-किटकिटे खपटे",
            "wheat4|Aphid-लाही किरा"
        ];
    }
    else if(c1.value == "sugarcane"){
        var pestArray = [
            "sugarcane1|Plassey Borer-प्ल्याजी गवारो",
            "sugarcane2|Sugarcane Top Borerतुप्पाको गवारो",
            "sugarcane3|Early Shoot Borer-काण्डको गवारो",
            "sugarcane4|Sugarcane Leafthopper-पातको फड्के किरा",
            "sugarcane5|Grasshopper-फट्यांन्ग्रो"
        ];
    }
    else if(c1.value == "jute"){
        var pestArray = [
            "jute1|Jute Hairy Caterpillar (Bihari)-जुटको झुसिलकिरो",
            "jute2|Jute Semilooper-जुटको अर्धलुपर",
            "jute3|Armyworm-फौजीकिरा",
            "jute4|Jute Stem Weevil-काण्डको घुन",
            "jute5|Jute Mealy Bug-मिलिबग"
        ];
    }

    for(var option in pestArray){
        var pair = pestArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        c2.options.add(newOption);
    }
}