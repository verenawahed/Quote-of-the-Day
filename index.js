function randomtext() {
    var username = ["― Mae West", "― Mahatma Gandhi","― Stephen Chbosky, The Perks of Being a Wallflower","― Andre Gide, Autumn Leaves","― Narcotics Anonymous","― H. Jackson Brown","― Mahatma Gandhi","― Marilyn Monroe"
  , "― Oscar Wilde","― Elbert Hubbard","― Mark Twain","― Albert Camus",
    ];
    var textquote = ['"You only live once, but if you do it right, once is enough."', '"Be the change that you wish to see in the world."','"We accept the love we think we deserve."','"It is better to be hated for what you are than to be loved for what you are not."','"Insanity is doing the same thing, over and over again, but expecting different results."','"Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."',
        '"Live as if you were to die tomorrow. Learn as if you were to live forever."','"Always forgive your enemies; nothing annoys them so much."','"A friend is someone who knows all about you and still loves you."','"If you tell the truth, you dont have to remember anything."'
    ,'"Dont walk in front of me… I may not follow Dont walk behind m I may not lead Walk beside me… just be my friend"','"Im selfish impatient and a little insecure I make mistakes I am out of control and at times hard to handle But if you cant handle me at my worst, then you sure as hell dont deserve me at my best."'
    ]


    var num = Math.floor(Math.random() * username.length)
    
    document.getElementById("randomtext").innerHTML = "New Quote";
    document.getElementById("Quote").innerHTML = textquote[num];
    document.getElementById("textquote").innerHTML = username[num];
    
}