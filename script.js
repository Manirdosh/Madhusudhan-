
    function showCategory(s1, s2){
       var s1 = document.getElementById(s1);
       var s2 = document.getElementById(s2);

       s2.innerHTML = "";
       if(s1.value == "vegetable"){
           var optionArray = [
            "choose_vegetable|Choose Vegetable-तरकारी छान्नुहोस्",
            "potato|Potato-आलु",
            "tomato|Tomato/Chillly-टमाटर/खुर्सानी",
           "crucifer|Crucifer Crops",
           "root|Root Crops-जरा बाली",
           "cucurbit|Cucurbit-कुकुरबिट",
           "bean|Bean/Pea-सिमि/केराउ",
           "brinjal|Brinjal-चिप्ले भिंडी",
           "bulbous|Bulbous Crop-बल्बस बाली",
           "ginger|Ginger-अदुवा",
           "coriander|Coriander-धनिया"
        ];
       }else if(s1.value == "fruits"){
        var optionArray = [
            "choose_fruits|Choose Fruits-फलफुल छान्नुहोस्",
            "mango|Mango-आप",
            "banana|Banana-केरा",
            "papaya|Papaya-मेवा",
            "pineapple|Pineapple-भुइकटर्",
            "citrus|Citrus-सिट्रस",
            "guava|Guava-अम्बा",
            "apple|Apple-स्याउ",
            "pear|Pear-नास्पति",
            "peach|Peach-आरु",
            "grapes|Grapes-अंगुर",
            "kiwi|Kiwi-किवी",
            "pomegranate|Pomegranate-अनार", 
            "cardamom|Cardamom-अलैंची",
            "coffee|Coffee-कफी",  
            "tea|Tea-चिया"  
        ];
       }else if(s1.value == "cereal"){
        var optionArray = [
            "choose_cereal|Choose Cereal Crops-खाध्यवाली छान्नुहाेस",
            "rice|Rice-धान",
            "wheat|Wheat-गहुँ ",
            "maize|Maize-मकै",
            "barley|Barley-जौ "
        ];
    }else if(s1.value == "legume"){
        var optionArray = [
           "choose_legume|Choose Legume Crops-कोसेबाली छान्नुहोस्",
            "lentil|Lentil-मसुरो",
            "chickpea|ChickPea-चना"
        ];
    }else if(s1.value == "oilseed"){
        var optionArray = [
            "choose_oilseed|Choose Oilseed-तेल्बाली छान्नुहोस्",
            "groundnut|Groundnut-बदाम",
            "sunflower|Sunflower-सूर्यमुखी"
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

    function showDiseases(c1, c2){
        var c1 = document.getElementById(c1);
        var c2 = document.getElementById(c2);

        c2.innerHTML = "";

        if(c1.value == "potato"){
            var diseasesArray = [
                "late|Late & Early Blight-डडुवा रोग",
                "wart|Wart-ऐजेरु",
                "brown-rot|Brown root-ओईलाउने वा खैरो पिप चक्ने रोग",
                "potato-diseases|Potato Viral Diseases-आलुको भाइरल रोग"
            ];
        }else if(c1.value == "rice"){
            var diseasesArray = [
                "rice-blast|Rice Blast-मरुवा रोग",
                "brown-spot|Brown Spot-खैरो थोप्ले रोग",
                "sheath-blight|Sheath Blight-पात र फेद डडुवा रोग",
                "bacterial-blight|Bacterial Blight-फेद कुहिने रोग",
                "false-smut|False Smut-कालो पोके रोग",
                "khaira-disease|Khaira Disease-खैरो रोग"
            ];
        }else if(c1.value == "wheat"){
            var diseasesArray = [
                "leaf-blight-wheat|Leaf Blight-पात डडुवा रोग",
                "brown-rust|Brown Rust of Wheat-खैरो सिन्दुरे रोग",
                "yellow-rust|Yellow Rust-पहेलो सिन्दुरे रोग",
                "loose-smut|Loose Smut-कालो पोके रोग",
                "stinking-smut|Stinking Smut-गन्हाउने कालो पोके रोग"
            ];
        }else if(c1.value == "maize"){
            var diseasesArray = [
                "leaf-blight-maize|Leaf Blight of maize-पातको डडुवा रोग",
                "grey-leaf|Grey Leaf Spot-पातको ध्वासे रोग",
                "downey-mildew|Downey Mildew-शिते ढुसी रोग",
                "head-smut|Head Smut-कालो पोके रोग",
                "cob-rot|Cob Rot/Ear Rot-घोगा कुहिने रोग",
                "bacterial-stalk|Bacterail Stalk Rot-डाठ कुहिने रोग"
            ];
        }else if(c1.value == "barley"){
            var diseasesArray = [
                "yellow-rust|Yellow Rust-पहेलो सिन्दुरे रोग",
                "stripe-rust|Stripe Rust-धर्से रोग",
                "smut|Smut-पोके रोग"
            ];
        }else if(c1.value == "lentil"){
            var diseasesArray = [
                "blight-lentil|Blight-डडुवा रोग"
            ];
        }else if(c1.value == "chickpea"){
            var diseasesArray = [
                "botrytis-grey|Botrytis Grey Mold-खैरे रोग",
                "foot-rot-chickpea|Foot Rot-फेद कुहिने रोग"
            ];
        }else if(c1.value == "tomato"){
            var diseasesArray = [
                "blight-tomato|Blight-डडुवा रोग",
                "leaf-curl|Leaf Curl Virus-पात घुम्रिने रोग",
                "phomopsis-blight|Phomopsis Blight-डडुवा",
                "wilt|Wilt-ओइलाउने रोग",
                "damping-off-tomato|Damping Off-बेर्ना कुहिने रोग",
                "alternaria-leaf-tomato|Alternaria Leaf Spot-भन्टाको थोप्ले रोग",
                "anthracnose-tomato|Anthracnose-कोत्रे रोग"
            ];
        }else if(c1.value == "crucifer"){
            var diseasesArray = [
                "alternaria-leaf-crucifier|Alternaria Leaf Spot-अल्टरनेरिया थोप्ले रोग",
                "downy-mildew|Downy Mildew-शिते ढुसी रोग",
                "club-root|Club Root-गदाजस्तो जरा हुने रोग",
                "damping-off-crucifer|Damping Off-बेर्ना कुहिने रोग",
                "white-rust|White Rust of Crucifer-सेतो सिन्दुरे रोग"
            ];
        }else if(c1.value == "root"){
            var diseasesArray = [
                "bacterial-leaf|Bacterial Leaf Blight-डडुवा रोग",
                "alternaria-leaf-root|Alternaria Leaf Spot-अल्टरनेरिया थोप्ले रोग"
            ];
        }else if(c1.value == "cucurbit"){
            var diseasesArray = [
                "powdery-mildew-cucurbit|Powdery Mildew-धुले ढुसी रोग",
                "downy-mildew|Downy mildew-शिते ढुसी रोग"
            ];
        }else if(c1.value == "bean"){
            var diseasesArray = [
                "rust|Rust-सिन्दुरे रोग",
                "powdery-mildew-bean|Powdery Mildew-धुले ढुसी रोग",
                "anthracnose-bean|Anthracnose-कोत्रे रोग",
                "root-rot|Root Rot & Web Blight-जरा कुहिने र जाले पात डडुवा रोग",
                "leaf-spot|Leaf Spot(Cercospora + Angular-थोप्ले रोग)",
                "mosaic-virus|Mosaic Virus-मोजाइक भाइरस"
            ];
        }else if(c1.value == "brinjal"){
            var diseasesArray = [
                "okra-yellow|Okra Yellow Vein Mosaic-पहेलो नशा मोजाइक भाइरस रोग",
                "root-knot|Root Knot Nematode-जरामा गाठो पर्ने रोग"
            ];
        }else if(c1.value == "bulbous"){
            var diseasesArray = [
                "basal-rot|Basal Rot of Onion-फेद कुहिने रोग",
                "leaf-blight-bulbous|Leaf Blight-पातको डडुवा रोग",
                "root-rot-bulbous|Root Rot-जरा कुहिने रोग"
            ];
        }else if(c1.value == "ginger"){
            var diseasesArray = [
                "rhizome-rot|Rhizome Rot-गानो कुहिने रोग",
                "bacterial-wilt|Bacterial Wilt-ओईलाउने रोग",
                "leaf-root-ginger|Leaf Spot-थोप्ले रोग"
            ];
        }else if(c1.value == "coriander"){
            var diseasesArray = [
                "wilt-corainder|Wilt-ओइलाउने रोग",
                "stem-gall|Stem Gall-काण्डमा गाँठो पर्ने रोग"
            ];
        }else if(c1.value == "groundnut"){
            var diseasesArray = [
                "white-blister-groundnut|White Blister-सेते रोग",
                "downy-mildew-groundnut|Downy Mildew-शिते ढुसी रोग",
                "powdery-mildew-groundnut|Powdery Mildew-धुले ढुसी रोग",
                "tikka-diseases|Tikka Diseases of Groundnut-थोप्ले रोग",
                "red-stripe|Red Stripe Rust-सिन्दुरे रोग"
            ];
        }
        else if(c1.value == "sunflower"){
            var diseasesArray = [
                "leaf-root-sunflower|Leaf Rot-डाठ र जरा कुहिने रोग",
                "red-stripe-sunflower|Red Stripe Rust-सिन्दुरे रोग"
            ];
        }else if(c1.value == "mango"){
            var diseasesArray = [
                "mango-anthracnose|Mango Anthracnose-कोत्रे रोग",
                "powdery-mildew-mango|Powdery Mildew-शिते ढुसी रोग",
                "red-rust-mango|Red Rust of Mango/Litchi-रातो सिन्दुरे रोग",
                "mango-malformation|Mango Malformation-आपको कुरूप रोग",
                "black-tip|Black Tip of Mango-फलको टुप्पो कालो हुने रोग",
                "sooty-mold|Sooty Mold-कालो पत्रे रोग"
            ];
        }else if(c1.value == "banana"){
            var diseasesArray = [
                "wilt-banana|Wilt(Panama & Moko-केराको बोट ओइलाउने रोग)",
                "sigatoka-disease|Sigatoka Disease-केराको सीगाटोका रोग",
                "banana-anthracnose|Banana Anthracnose-कोत्रे रोग",
                "banana-bunchy|Banana Bunchy Top-टुप्पोमा झुप्पा हुने रोग"
            ];
        }else if(c1.value == "papaya"){
            var diseasesArray = [
                "foot-rot-papaya|Foot & Root Rot-फेद र जरा कुहिने रोग"
            ];
        }else if(c1.value == "pineapple"){
            var diseasesArray = [
                "leaf-rot-pineapple|Leaf & Fruit Rot-पात तथा फल कुहिने रोग",
                "heart-rot-pineapple|Heart Rot & Crown Rot-क्राउन कुहिने रोग"
            ];
        }else if(c1.value == "citrus"){
            var diseasesArray = [
                "powdery-mildew-citrus|Powdery Mildew-धुले ढुसी रोग",
                "citrus-greening|Citrus Greening-सित्रस ग्रिनिंग रोग",
                "citrus-canker|Citrus Canker-सिट्रस क्यांकर",
                "citrus-scab|Citrus Scab-सिट्रसको दादे रोग",
                "gummosis-rot|Gummosis & Foot Rot-गुद आउने र फेद कुहिने रोग",
                "quick-decline|Quick Decline-कुइक डीक्लाइन "
            ];
        }else if(c1.value == "guava"){
            var diseasesArray = [
                "guava-rust|Guava Rust-सिन्दुरे रोग",
                "algal-leaf-spot|Algal Leaf Spot-थोप्ले रोग",
                "guava-anthracnose|Guava Anthracnose-कोत्रे रोग"
            ];
        }else if(c1.value == "apple"){
            var diseasesArray = [
                "apple-scab|Apple Scab-दादे रोग",
                "powdery-mildew-apple|Powdery Mildew-धुले ढुसी रोग",
                "papery-bark|Papery Bark-बोक्रा खुइलिने रोग",
                "pink-disease|Pink Disease"
            ];
        }else if(c1.value == "pear"){
            var diseasesArray = [
                "black-rot-pear|Black Rot & Bitter Rot-फल कुहिने रोग ",
                "leaf-blight|Leaf Blight & Spot-डडुवा र थोप्ले रोग"
            ];
        }else if(c1.value == "peach"){
            var diseasesArray = [
                "peach-leaf|Peach Leaf Curl-पात दोब्रिने रोग",
                "peach-powdery-mildew|Powdery Mildew-धुले ढुसी रोग"
            ];
        }else if(c1.value == "grapes"){
            var diseasesArray = [
                "downy-mildew-grapes|Downy Mildew-शिते ढुसी रोग",
                "powdery-mildew-grapes|Powdery Mildew-धुले ढुसी रोग",
                "bird-eye|Bird eye Spot or ANthracnose-चरिनयन थोप्ले रोग"
            ];
        }else if(c1.value == "kiwi"){
            var diseasesArray = [
                "foot-rot-kiwi|Foot & Root Rot-जरा कुहिने रोग",
                "powdery-mildew-kiwi|Powdery Mildew-धुले ढुसी रोग"
            ];
        }else if(c1.value == "pomegranate"){
            var diseasesArray = [
                "alternaria|Alternaria & Cercospora Fruit Spot-",
                "leaf-blight-pomegranate|Leaf Blight-पातको डडुवा रोग"
            ];
        }else if(c1.value == "cardamom"){
            var diseasesArray = [
                "clump-root-cardamom|Clump Root-जरा तथा पाना कुहिने रोग",
                "leaf-rot-cardamom|Leaf Rot-पात कुहिने रोग",
                "stunty-mosaic-virus|Stunty & Streak Mosaic Virus-छिर्के र फुर्क्के रोग"
            ];
        }else if(c1.value == "coffee"){
            var diseasesArray = [
                "coffee-rust|Coffee Rust-सिन्दुरे रोग",
                "black-rot|Black Rot-पात कुहिने रोग",
                "brown-blight|Brown Blight-खैरो डडुवा रोग"
            ];
        }else if(c1.value == "tea"){
            var diseasesArray = [
                "blight-tea|Blight of Tea-डडुवा रोग ",
                "twig|Twig Dieback-टुप्पो मर्ने रोग "
            ];
        }

        for(var option in diseasesArray){
            var pair = diseasesArray[option].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            c2.options.add(newOption);
        }
    }