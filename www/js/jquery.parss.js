(function(a){
		  
		  a.fn.PaRSS=function(m,c,b,l){
			  
			  
			  var i=this,g={feed_url:m,item_count:c,date_format:b,show_descriptions:l};
			  
			  function f(){
				  var n=new google.feeds.Feed(m);if(g.item_count){n.setNumEntries(g.item_count)}n.load(function(o){if(!o.error){d(o.feed.entries)}})}function d(n){
					  var o="";a.each(n,function(p,q){
												 
												 list_item="<span class='parss-title'><a href='"+q.link+"'>"+q.title+"</a></span>";if(g.date_format&&g.date_format.length>0){list_item+="<span class='parss-date'>"+k(q.publishedDate,g.date_format)+"</span>"}switch(g.show_descriptions){case"image":list_item+="<span class='parss-image'>"+h(q.content)+"</span><span class='parss-description'>"+q.contentSnippet+"</span>";break;case"content":list_item+="<span class='parss-description'>"+q.content+"</span>";break;case true:case"true":list_item+="<span class='parss-description'>"+q.contentSnippet+"</span>";break;default:break}o+="<li>"+list_item+"</li>"});
					  
					  
					  
					  $(i).append(o)}function k(o,r){var n=["January","February","March","April","May","June","July","August","September","October","November","December"],s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=new Date(Date.parse(o)),q="";for(var p=0;p<r.length;p+=1){switch(r.charAt(p)){case"d":q+=e(o.getDate());break;case"D":q+=s[o.getDay()].substring(0,3);break;case"j":q+=o.getDate();break;case"l":q+=s[o.getDay()];break;case"N":q+=o.getDay()+1;break;case"S":q+=j(o.getDate());break;case"w":q+=o.getDay();break;case"z":break;case"W":break;case"F":q+=n[o.getMonth()];break;case"m":q+=e(o.getMonth());break;case"M":q+=n[o.getMonth()].substring(0,3);break;case"n":q+=o.getMonth()+1;break;case"t":break;case"L":break;case"o":case"Y":q+=o.getFullYear();break;case"y":q+=o.getFullYear().toString().substring(-2);break;case"a":q+=(o.getHours()<12)?"am":"pm";break;case"A":q+=(o.getHours()<12)?"AM":"PM";break;case"B":break;case"g":q+=(o.getHours()>12)?o.getHours()-12:o.getHours();break;case"G":q+=o.getHours();break;case"h":q+=e((o.getHours()>12)?o.getHours()-12:o.getHours());break;case"H":q+=e(o.getHours());break;case"i":q+=e(o.getSeconds());break;case"s":q+=e(o.getDate());break;case"u":q+=o.getMilliseconds();break;case"e":break;case"O":case"P":q+=o.getTimezoneOffset();break;case"T":break;case"Z":break;case"c":q+=o.toUTCString();break;case"r":q+=o.toDateString();break;case"U":q+=o.valueOf();break;default:q+=r.charAt(p);break}}return q}function j(n){switch(parseInt(n.toString().substring(-1))){case 1:return"st";break;case 2:return"nd";break;case 3:return"rd";break;default:return"th";break}}function e(n){var o=n.toString();if(o.length<2){o="0"+o}return o}
					  function h(o){var n=o.match(/&lt;img[^>+]*&gt;/i);
					  alert(n);
					  if(n){var p=n[0].match(/src="[^"+]*"/i),q=n[0].match(/alt="[^"+]*"/i);return"<img "+p+" "+q+" />"}return""}a.getScript("https://www.google.com/jsapi",function(){google.load("feeds","1",{callback:f})})}})(jQuery,this);