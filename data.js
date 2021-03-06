const quizData = [
    {
        question: "Who was the last Manchester United player to win the Ballon d’Or before Cristiano Ronaldo?",
        answers: {
            a1: "Eric Cantona",
            a2: "David Beckham",
            a3: "George Best",
            a4: "Ryan Giggs"
        },
        correct: "a3"
    },
    {
        question: "Which English team has launched a bid to be officially recognised as the oldest professional club in the world?",
        answers: {
            a1: "Stoke City",
            a2: "Nottingham Forest",
            a3: "Aston Villa",
            a4: "Crystal Palace"
        },
        correct: "a1"
    },
    {
        question: "Brazil have won the World Cup more times than any other team with five triumphs. Which two nations are joint-second with four World Cup titles?",
        answers: {
            a1: "Germany & Argentina",
            a2: "Italy & Argentina",
            a3: "Germany & Italy",
            a4: "Italy & France"
        },
        correct: "a3"
    },
    {
        question: "Who is the only player to win the Champions League with three different clubs?",
        answers: {
            a1: "Samuel Eto'o",
            a2: "Didier Deschamps",
            a3: "Xabi Alonso",
            a4: "Clarens Seedorf"
        },
        correct: "a4"
    },
    {
        question: "How many Ballon d’Or awards has Lionel Messi won?",
        answers: {
            a1: "Four",
            a2: "Five",
            a3: "Six",
            a4: "Seven"
        },
        correct: "a3"
    },
    {
        question: "Which British team has won the European Cup more times than its own domestic top league?",
        answers: {
            a1: "Nottingham Forest",
            a2: "Aston Villa",
            a3: "Leeds United",
            a4: "Everton"
        },
        correct: "a1"
    },
    {
        question: "Which England footballer was famously never given a yellow card?",
        answers: {
            a1: "Kevin Keegan",
            a2: "Jamie Carragher",
            a3: "Kieron Dyer",
            a4: "Gary Lineker"
        },
        correct: "a4"
    },
    {
        question: "Three people have won the Champions League a record three times as manager. Who are they?",
        answers: {
            a1: "Carlo Ancelotti, Jose Mourinho and Ottmar Hitzfeld",
            a2: "Bob Paisley, Carlo Ancelotti and Zinedine Zidane",
            a3: "Alex Ferguson, Pep Guardiola and Jose Mourinho",
            a4: "Vicente del Bosque, Arrigo Sacchi and Zinedine Zidane"
        },
        correct: "a2"
    },
    {
        question: "Which outfield player appeared in the Champions League final in three different decades?",
        answers: {
            a1: "Paolo Maldini",
            a2: "Didier Deschamps",
            a3: "Ryan Giggs",
            a4: "Marcel Desailly"
        },
        correct: "a3"
    },
    {
        question: "Messi has spent his entire professional career at Barcelona, but what was his schoolboy team?",
        answers: {
            a1: "Newell's Old Boys",
            a2: "Boca Juniors",
            a3: "River Plate",
            a4: "Banfield"
        },
        correct: "a1"
    },
    {
        question: "Which country has appeared in three World Cup finals, but never won the competition?",
        answers: {
            a1: "Uruguay",
            a2: "Netherlands",
            a3: "Switzerland",
            a4: "Croatia"
        },
        correct: "a2"
    },
    {
        question: "In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?",
        answers: {
            a1: "Spain 1982",
            a2: "Mexico 1986",
            a3: "Italy 1990",
            a4: "USA 1994"
        },
        correct: "a2"
    },
    {
        question: "Which country won the first ever World Cup in 1930?",
        answers: {
            a1: "Brazil",
            a2: "France",
            a3: "Italy",
            a4: "Uruguay"
        },
        correct: "a4"
    },
    {
        question: "The record number of World Cup goals is 16, scored by who?",
        answers: {
            a1: "Ronaldo",
            a2: "Cristiano Ronaldo",
            a3: "Miroslav Klose",
            a4: "Pele"
        },
        correct: "a3"
    },
    {
        question: "Cristiano Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid?",
        answers: {
            a1: "No.5",
            a2: "No.9",
            a3: "No.10",
            a4: "No.11"
        },
        correct: "a2"
    },
    {
        question: "After Juventus, AC Milan and Inter, which team has won the most Serie A titles?",
        answers: {
            a1: "Roma",
            a2: "Lazio",
            a3: "Genoa",
            a4: "Torino"
        },
        correct: "a3"
    },
    {
        question: "Bayern Munich have won the record number of Bundesliga titles, but which two clubs follow with five titles each?",
        answers: {
            a1: "Schalke 04 & Bayer Leverkusen",
            a2: "Borussia Monchengladbach & Borussia Dortmund",
            a3: "Werder Bremen & Hamburger SV",
            a4: "VfB Stuttgart & FC Köln"
        },
        correct: "a2"
    },
    {
        question: "The Euro 2000 final between France and Italy was decided by Golden Goal. Which player scored the goal?",
        answers: {
            a1: "Patrick Vieira",
            a2: "Zinedine Zidane",
            a3: "David Trezeguet",
            a4: "Thiery Henry"
        },
        correct: "a3"
    },
    {
        question: "In which season was the European Cup rebranded as the Champions League?",
        answers: {
            a1: "1990-91",
            a2: "1991-92",
            a3: "1992-93",
            a4: "1993-94"
        },
        correct: "a3"
    },
    {
        question: "Which club has won the most Champions League titles after Real Madrid?",
        answers: {
            a1: "Bayern Munich",
            a2: "Barcelona",
            a3: "Liverpool",
            a4: "Milan"
        },
        correct: "a4"
    },
    {
        question: "Which country has won the most World Cups?",
        answers: {
            a1: "Germany",
            a2: "Italy",
            a3: "Argentina",
            a4: "Brazil"
        },
        correct: "a4"
    },
    {
        question: "Which player scored the fastest hat-trick in the Premier League?",
        answers: {
            a1: "Sadio Mane",
            a2: "Mohamed Salah",
            a3: "Alan Shearer",
            a4: "Cun Aguero"
        },
        correct: "a1"
    },
    {
        question: "With 260 goals, who is the Premier League's all-time top scorer?",
        answers: {
            a1: "Alan Shearer",
            a2: "Wayne Rooney",
            a3: "Andrew Cole",
            a4: "Michael Owen"
        },
        correct: "a1"
    },
    {
        question: "With 365 goals, who is the Bundesliga's all-time top scorer?",
        answers: {
            a1: "Klaus Fischer",
            a2: "Jupp Heynckes",
            a3: "Gerd Müller",
            a4: "Claudio Pizarro"
        },
        correct: "a3"
    },
    {
        question: "After Real Madrid and Barcelona which team has won the most La Liga titles?",
        answers: {
            a1: "Athletic Bilbao",
            a2: "Atletico Madrid",
            a3: "Valencia",
            a4: "Real Sociedad"
        },
        correct: "a2"
    },
    {
        question: "Manchester United famously wear red, but what colours did they wear before adopting red?",
        answers: {
            a1: "Black and white",
            a2: "Blue",
            a3: "Green",
            a4: "Green and gold"
        },
        correct: "a4"
    },
    {
        question: "Which club is associated with 'Galacticos'?",
        answers: {
            a1: "Boca Juniors",
            a2: "River Plate",
            a3: "Real Madrid",
            a4: "Barcelona"
        },
        correct: "a3"
    },
    {
        question: "Only three German clubs have won the European Cup/Champions League. Bayern Munich, Borussia Dortmund and ...?",
        answers: {
            a1: "Schalke",
            a2: "Hamburg",
            a3: "Leverkusen",
            a4: "Herta Berlin"
        },
        correct: "a2"
    },
    {
        question: "Denmark notably won Euro 92, despite the fact that they did not initially qualify. Which team did they replace?",
        answers: {
            a1: "Croatia",
            a2: "Serbia",
            a3: "Yugoslavia",
            a4: "Ukraine"
        },
        correct: "a3"
    },
    {
        question: "With three titles each, which two national teams have won the most European Championships?",
        answers: {
            a1: "Germany & Spain",
            a2: "Germany & Italy",
            a3: "Italy & France",
            a4: "Italy & England"
        },
        correct: "a1"
    },
    {
        question: "In which year was the first European Championship held?",
        answers: {
            a1: "1956",
            a2: "1960",
            a3: "1964",
            a4: "1968"
        },
        correct: "a2"
    },
    {
        question: "Which team was the first from the UK to win the European Cup?",
        answers: {
            a1: "Manchester United",
            a2: "Leeds",
            a3: "Celtic",
            a4: "Liverpool"
        },
        correct: "a3"
    },
    {
        question: "Who is the Champions League's top goalscorer of all time?",
        answers: {
            a1: "Raul",
            a2: "Messi",
            a3: "Cristiano Ronaldo",
            a4: "Lewandowski"
        },
        correct: "a3"
    },
    {
        question: "Which Portuguese team did Ronaldo play for before signing for Manchester United?",
        answers: {
            a1: "Porto",
            a2: "Benfica",
            a3: "Sporting Lisbon",
            a4: "Boavista"
        },
        correct: "a3"
    },
    {
        question: "Which team won the first Premier League title (1992-93)?",
        answers: {
            a1: "Arsenal",
            a2: "Blackburn",
            a3: "Manchester United",
            a4: "Chelsea"
        },
        correct: "a3"
    },
    {
        question: "With 202 clean sheets, which goalkeeper has the best record in the Premier League?",
        answers: {
            a1: "Peter Shilton",
            a2: "David Seaman",
            a3: "David de Gea",
            a4: "Petr Cech"
        },
        correct: "a4"
    },
    {
        question: "Which country won the World Cup in 1982?",
        answers: {
            a1: "Italy",
            a2: "Germany",
            a3: "Argentina",
            a4: "Brazil"
        },
        correct: "a1"
    },
    {
        question: "Which country won the World Cup in 1998?",
        answers: {
            a1: "Brazil",
            a2: "France",
            a3: "Italy",
            a4: "Germany"
        },
        correct: "a2"
    },
    {
        question: "Three people have won the World Cup as a player and as a coach. Mario Zagallo, Didier Deschamps and...?",
        answers: {
            a1: "Johan Cruyff",
            a2: "Laurent Blanc",
            a3: "Franz Beckenbauer",
            a4: "Raymond Domenech"
        },
        correct: "a3"
    },
    {
        question: "Which team won the Champions League in 1996-97?",
        answers: {
            a1: "Juventus",
            a2: "Borussia Dortmund",
            a3: "Ajax",
            a4: "Real Madrid"
        },
        correct: "a2"
    },
    {
        question: "Which team won the Champions League in 1994-95?",
        answers: {
            a1: "Ajax",
            a2: "Milan",
            a3: "Marseille",
            a4: "Real Madrid"
        },
        correct: "a1"
    },
    {
        question: "Which team won the Champions League in 2011-12?",
        answers: {
            a1: "Barcelona",
            a2: "Bayern Munich",
            a3: "Chelsea",
            a4: "Real Madrid"
        },
        correct: "a3"
    },
    {
        question: "Which team won the Champions League in 2003-04?",
        answers: {
            a1: "Milan",
            a2: "Liverpool",
            a3: "Porto",
            a4: "Juventus"
        },
        correct: "a3"
    }   


]

