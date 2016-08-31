var shownDiv = 0;
var shownStory = 0;
var changed = false;
var textCurrentLength = 0;
var textData = "";
var textIndex = 0;
var timeout;

$(document).ready(function(){
	$("#menu-home").click(function(){
		change(shownDiv, 0);
		
		if(changed){
			readyType();
			type(0, t0, function(){
				type(1, t1, function(){
					type(2, t2);
				})
			});	
		}
	});
	
	$("#menu-bio").click(function(){
		change(shownDiv, 1);
		
		if(changed){
			readyType();
			type(3, t3, function(){
				type(4, t4, function(){
					type(5, t5, function(){
						type(6, t6, function(){
							type(7, t7, function(){
								type(8, t8);
							});
						})
					})
				})
			});
		}
	});
	
	$("#menu-childhood").click(function(){
		change(shownDiv, 2);
		
		if(shownStory != 1){
			shownStory = 1;
			$("#body-story-image").fadeOut(100, function(){
				$("#body-story-image").attr('src', 'images/6.jpg').fadeIn('fast');
			});
			readyType();
			type(9, t9v1, function(){
				type(10, t10v1)
			});
		}
	});
	
	$("#menu-highschool").click(function(){
		change(shownDiv, 2);
		
		if(shownStory != 2){
			shownStory = 2;
			$("#body-story-image").fadeOut(100, function(){
				$("#body-story-image").attr('src', 'images/7.jpg').fadeIn('fast');
			});
			readyType();
			type(9, t9v2, function(){
				type(10, t10v2)
			});
		}
	});
	
	$("#menu-college").click(function(){
		change(shownDiv, 2);
		
		if(shownStory != 3){
			shownStory = 3;
			$("#body-story-image").fadeOut(100, function(){
				$("#body-story-image").attr('src', 'images/8.jpg').fadeIn('fast');
			});
			readyType();
			type(9, t9v3, function(){
				type(10, t10v3)
			});
			
		}
	});
	
	$("#menu-dream").click(function(){
		change(shownDiv, 3);
		
		if(changed){
			readyType();
			type(11, t11, function(){
				type(12, t12)
			});	
		}
	});
	
	$("#menu-photos").click(function(){
		change(shownDiv, 4);
	});
	
	$("#body-photos img").each(function(){
		$(this).click(function(){
			$('.preview')[0].style.display = "block";
			$('.preview-content')[0].src = this.src;
		});
	});

	$(".close").click(function(){
		$('.preview')[0].style.display = "none";
	});
	
	readyType();
	type(0, t0, function(){
		type(1, t1, function(){
			type(2, t2);
		})
	});
	
	setInterval('animateCursor()', 600);
	setInterval('animateHeadName()');
});

function change(hideDiv, showDiv){
	changed = false;
	if(showDiv != shownDiv) {
		$(".body-container").eq(hideDiv).hide();
		$(".body-container").eq(showDiv).fadeIn();
		$("#body-story-image").hide();
		shownDiv = showDiv;
		changed = true;
	}
}

function readyType(){
	textCurrentLength = 0;
	textData = '';
	clearTimeout(timeout);
	$(".text").html("");
}

function type(index, data, callback){
	textIndex = index;
	textData = data;
	typeText(callback);
}

function typeText(callback){
	$(".text").eq(textIndex).html(textData.substr(0, textCurrentLength++) + "<span id='cursor'>|</span>");
	if(textCurrentLength < textData.length + 1){
		timeout = setTimeout('typeText(' + callback + ')', 50);
	} else {
		if(callback != null){
			$(".text").eq(textIndex).html(textData.substr(0, textCurrentLength));
		}
		textCurrentLength = 0;
		textData = "";
		callback();
	}
}

function animateCursor(){
    $('#cursor').animate({opacity: 0 }, 'fast').animate({opacity: 1}, 'fast');
}

function animateHeadName() {
    $('#head-name').animate({
        opacity: 0.5
    }, 'slow').animate({
        opacity: 1
    }, 'slow');
}

//text data
var t0 = "Welcome to my Personal Website!";
var t1 = "SIR PERCIVAL LABOG";
var t2 = "INSTRUCTOR";
var t3 = "Biography";
var t4 = "Name: Mark Allen Ramirez";
var t5 = "Sex: Male";
var t6 = "Birthdate: February 26, 1997";
var t7 = "Address: Bayombong, Nueva Vizcaya";
var t8 = "I am Mark Allen Ramirez. I am a PSEP speaker, I have the training of a winner! I am good, I'll be better; through speaking, I'm a builder. When my teacher gives a call, I go in front of the hall; I speak and give my all, I always stand tall. I improve my pronunciation, I enhance my intonation; I also move my body when I speak to everybody. I listen to my CD, I do my homework diligently; I always practice at home even when I am alone. I like extemporaneous speakin activities; I'm not afraid of the IGT's, I embrace impromptu speaking; I also love emceeing. I learn the English language because it provides international linkage. It connects people and nations; It opens doors for my generation. I am PSEP speaker; I'll be a nation-builder and a mover. Yes, I am confident and brave; With God's help, I'll be great!";
var t9v1 = "Childhood Life";
var t10v1 = "Once I was seven years old, my mama told me \"Go get yourself some friends or you'll be lonely\" and so did I. And then me and my friends pushed each other to our limits and we learned quicker. By eleven, started to play computer games. We don't have our own money so we just go to school for the allowance just to play computer games. But then we have changed.";
var t9v2 = "Highschool Life";
var t10v2 = "They say, highschool life may be one of the hardest of part of our life maybebecause of peer pressure or maybe teenage life begins. But I say, highschoollife one of the happiest part of my life because more allowance! Yeah!. Justjoking, it is because I have new friends! It may be hard to climb a mountain, but with friends you'll feel like you want more mountains to climb.";
var t9v3 = "College Life";
var t10v3 = "College life? Yes, I'm still alive trying to survive. This is where real life starts. This is where dreams becomes reality. But make sure you know your dreams because therewas a time when I enrolled on the wrong course but luckily I survived, but just the firstyear. And then I suddenly change my mind, and so I enrolled on another course, which iswhat I'm currently taking, BSIT. And yet more histories is going to happen.";
var t11 = "My Dream";
var t12 = "Every man's dream, a successful and happy life.";