$(document).ready(function(){
    console.log("hello");
        $("form").on("submit", function(e) {
            e.preventDefault();
            const userName = $("#name").val();
            const recipient = $("#person").val();
            const relationship = $("input[name=relationship]:checked").val();
            const topic = $("input[name=reason]").val();
            const frequency = $("input[name=frequency]:checked").val();
            const howBad = $("input[name=howBadly]:checked").val();

            const howBadly = $("input[name=howBadly]:checked").val();

            const excuses = {
                notBad: [],
                reallyDont: [],
                desperate: []
            };

            const notBad1 = `<p>Hey ${recipient}, remember how you told me you wanted me to ${topic}? Yeah sorry, can't. Not today. -${userName}, your favourite ${relationship}</p>`;

            const notBad2 = `<p>${recipient}, listen, I know it has been ${frequency} since I said no to you already, but I don't think I am the right person to ${topic}. Hope you find someone to help you out! - Love, ${userName}</p>`;

            const notBad3 = `<p>#sorrynotsorry I only say yes to Ryan Gosling and maybe, Justin Trudeau. Maybe.</p>`;

            const reallyDont1 = `<p>Hey ${recipient}, I wanted to talk to you about ${topic}. See, I was thinking about it and realized that my dog was wholeheartedly judging me. As much as I really want to be a good ${relationship}, I just can't have my dog judge me like that. Sorry, maybe someone else can ${topic} in my place? Next time for sure though! -${userName}</p>`;

            const reallyDont2 = `<p>${recipient}, I am really swamped with work right now and can't seem to remove myself from my super long to-do list. I know that you need help to ${topic} but it's just really a bad time right now. Sorry! -Regards, ${userName}</p>`;

            const reallyDont3 = `<p>Hey ${recipient}! I was about to head out to ${topic}, but then my mom said no. Sorry. -${userName}</p>`;

            const des1 = `<p>Hi ${recipient}, so I was about to ${topic} but then I got a phone call from my doctor saying that I can't do any physical labour. Sorry, I know it's been ${frequency} since I helped you out but I just can't do it this time. - Peace, ${userName} </p`;

            const des2 = `<p>Srry, ${recipient}, I won't be able to ${topic}. -${userName}</p>`;

            const des3 = `<p>${recipient}, unfortunately, as much as I would love to ${topic}, the answer is no. -Best, your favourite ${relationship}, ${userName}</p>`

            excuses.notBad.push(notBad1, notBad2, notBad3);
            excuses.reallyDont.push(reallyDont1, reallyDont2, reallyDont3);
            excuses.desperate.push(des1, des2, des3);

            // randomly pick a way to say "no"
            const reasons = excuses[howBadly];
            const randomNumber = Math.floor(Math.random() * reasons.length);

            const finalAnswer = reasons[randomNumber]
            console.log(finalAnswer);

            $('.final-answer').append(finalAnswer);
        })

        $(".relationships label").on("click", function(){
            $(".relationships label").removeClass("selected");
            $(this).addClass("selected");
        });

        $(".how-badly label").on("click", function () {
            $(".how-badly label").removeClass("selected");
            $(this).addClass("selected");
        });

        $(".frequency label").on("click", function () {
            $(".frequency label").removeClass("selected");
            $(this).addClass("selected");
        });










})

