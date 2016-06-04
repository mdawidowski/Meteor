import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import './main.html';

var x = 1;

String.prototype.ustawZnak = function(miejsce, znak){
	if(miejsce > this.length - 1)	return this.toString();
	else
	return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz(nr)
{

	var trafiona = false;

	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr])
		{
			hasloukryte = hasloukryte.ustawZnak(i,litery[nr]);

		}
	}
	if(haslo == hasloukryte){
		x=x+1;
		nowehaslo(x);
		
	}
	return hasloukryte
}

function nowehaslo(x){
	haslo = hasloo[x];
	haslo = haslo.toUpperCase();

	var dlugosc = haslo.length;

	var hasloukryte = "";

	for (i=0; i<dlugosc; i++){
	if (haslo.charAt(i)==" ") hasloukryte = hasloukryte + " ";
		else hasloukryte = hasloukryte + "-";
	}

}
var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";



var hasloo= new Array(5);

hasloo[1] = "Żeby kózka nie skakała to by wózka dziś nie pchała";
hasloo[2] = "Bez pracy nie ma kołaczy";
hasloo[3] = "Czy się robi czy sie leży sto tysięcy się należy";
hasloo[4] = "Ala ma kota kot ma Alę";
hasloo[5] = "Łubudubu łubudubu niech żyje nam prezes naszego klubu";

haslo = hasloo[x];
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var hasloukryte = "";

for (i=0; i<dlugosc; i++){
if (haslo.charAt(i)==" ") hasloukryte = hasloukryte + " ";
	else hasloukryte = hasloukryte + "-";
}



if (Meteor.isClient){

	 Template.gra.onCreated(function helloOnCreated() {
    this.gra = new ReactiveVar(0);
    this.gra.set(hasloukryte);
  });

  Template.gra.helpers({
    pokazhaslo: function() {
      return Template.instance().gra.get();
    },
    literki: function() {
      var tresc_diva = "";
      for (i=0; i<=34; i++){
				var element = "lit" + i;
        tresc_diva = tresc_diva + '<button type="button" id="'+element+'">'+litery[i]+'</button>';
        if((i+1)%7 ==0)tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
      }
      return tresc_diva;
    },
		gracz1: function() {

		}
  });
	Template.gra.events({
		'click #lit0'(event, instance) {
				var klucz = sprawdz(0);
				instance.gra.set(klucz);
				}

		,
		'click #lit1'(event, instance) {
			var klucz = sprawdz(1);
			instance.gra.set(klucz);
			},

		'click #lit2'(event, instance) {
			var klucz = sprawdz(2);
			instance.gra.set(klucz);



		},
		'click #lit3'(event, instance) {
			var klucz = sprawdz(3);
			instance.gra.set(klucz);



		},
		'click #lit4'(event, instance) {
			var klucz = sprawdz(4);
			instance.gra.set(klucz);



		},
		'click #lit5'(event, instance) {
			var klucz = sprawdz(5);
			instance.gra.set(klucz);



		},
		'click #lit6'(event, instance) {
			var klucz = sprawdz(6);
			instance.gra.set(klucz);



		},
		'click #lit7'(event, instance) {
			var klucz = sprawdz(7);
			instance.gra.set(klucz);



		},
		'click #lit8'(event, instance) {
			var klucz = sprawdz(8);
			instance.gra.set(klucz);


		},
		'click #lit9'(event, instance) {
			var klucz = sprawdz(9);
			instance.gra.set(klucz);


		},
		'click #lit10'(event, instance) {
			var klucz = sprawdz(10);
			instance.gra.set(klucz);



		},
		'click #lit11'(event, instance) {
			var klucz = sprawdz(11);
			instance.gra.set(klucz);



		},
		'click #lit12'(event, instance) {
			var klucz = sprawdz(12);
			instance.gra.set(klucz);


		},
		'click #lit13'(event, instance) {
			var klucz = sprawdz(13);
			instance.gra.set(klucz);


		},
		'click #lit14'(event, instance) {
			var klucz = sprawdz(14);
			instance.gra.set(klucz);

		},
		'click #lit15'(event, instance) {
			var klucz = sprawdz(15);
			instance.gra.set(klucz);


		},
		'click #lit16'(event, instance) {
			var klucz = sprawdz(16);
			instance.gra.set(klucz);

		},
		'click #lit17'(event, instance) {
			var klucz = sprawdz(17);
			instance.gra.set(klucz);


		},
		'click #lit18'(event, instance) {
			var klucz = sprawdz(18);
			instance.gra.set(klucz);


		},
		'click #lit19'(event, instance) {
			var klucz = sprawdz(19);
			instance.gra.set(klucz);


		},
		'click #lit20'(event, instance) {
			var klucz = sprawdz(20);
			instance.gra.set(klucz);


		},
		'click #lit21'(event, instance) {
			var klucz = sprawdz(21);
			instance.gra.set(klucz);


		},
		'click #lit22'(event, instance) {
			var klucz = sprawdz(22);
			instance.gra.set(klucz);


		},
		'click #lit23'(event, instance) {
			var klucz = sprawdz(23);
			instance.gra.set(klucz);


		},
		'click #lit24'(event, instance) {
			var klucz = sprawdz(24);
			instance.gra.set(klucz);


		},
		'click #lit25'(event, instance) {
			var klucz = sprawdz(25);
			instance.gra.set(klucz);


		},
		'click #lit26'(event, instance) {
			var klucz = sprawdz(26);
			instance.gra.set(klucz);

		},
		'click #lit27'(event, instance) {
			var klucz = sprawdz(27);
			instance.gra.set(klucz);


		},
		'click #lit28'(event, instance) {
			var klucz = sprawdz(28);
			instance.gra.set(klucz);


		},
		'click #lit29'(event, instance) {
			var klucz = sprawdz(29);
			instance.gra.set(klucz);


		},
		'click #lit30'(event, instance) {
			var klucz = sprawdz(30);
			instance.gra.set(klucz);


		},
		'click #lit31'(event, instance) {
			var klucz = sprawdz(31);
			instance.gra.set(klucz);


		},
		'click #lit32'(event, instance) {
			var klucz = sprawdz(32);
			instance.gra.set(klucz);


		},
		'click #lit33'(event, instance) {
			var klucz = sprawdz(33);
			instance.gra.set(klucz);

		},
		'click #lit34'(event, instance) {
			var klucz = sprawdz(34);
			instance.gra.set(klucz);

			}



	});
}
