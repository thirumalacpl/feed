    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //

    function onDeviceReady() {
        $(document).on('click', '#link', function(){
    var website =  $("#link").attr("data-link");
    alert(website);
     window.open = cordova.InAppBrowser.open;
         var ref = window.open(website, '_blank', 'location=yes');
         ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
         ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
         ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
         ref.addEventListener('exit', function(event) { alert(event.type); });
});
    }


google.load("feeds", "1");


            function initialize(url) {
                if (url == "http://www.formget.com/feed") {
                    var tab = "myTable";
                }
                else if(url == "http://www.inkthemes.com/feed"){
                    //http://www.oneindia.com/rss/city-chennai-fb.xml
                    var tab = "myTable1";
                }
                else{
                    var tab ="myTable2";
                }
                var feed = new google.feeds.Feed(url);
                //alert(feed);
                feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);
                feed.setNumEntries(10);
                feed.load(function(result) {
                    // alert(result);
                    var div1 = "";
                    var pubdate;
                    if (!result.error) {
                        //alert('hello');
                        // var container = document.getElementById("feed");
                        // alert(container);
                        // alert(result.feed.entries.length);
                        for (var i = 0; i < result.feed.entries.length; i++) {
                            var entry = result.feed.entries[i];
                            // alert(entry);
                            //var div = document.createElement("li");
                            //var c = 'slash:comments';
                            pubdate = entry.publishedDate;
                            div1 += "<li><a class='ui-btn ui-btn-icon-right ui-icon-carat-r' id=\"link\" data-link=\"" + entry.link + "\">" + entry.title + "<p id=\"catp\"><strong id=\"cat\">" + entry.categories + "</strong></p><p>" + entry.publishedDate + "</p>" + "</a></li>";
                            //div.appendChild(document.createTextNode(entry.title));
                            //div.appendChild(document.createTextNode(entry.link));
                            //container.appendChild(div);

                            //alert(pubdate);
                            document.getElementById("myTable").innerHTML = div1;
                            document.getElementById("myTable1").innerHTML = div1;
                        }
                    }
                });
            }
            // google.setOnLoadCallback(initialize);


             $(document).ready(function() {
                $("#getfeed").click(function() {
                    var url = $("#feedurl").val();
                    alert(url);
                    initialize(url);
                });
            });

            $(document).ready(function() {
                $("#formget").click(function() {
                    var url = $("#formget").attr("id");
                    //alert(url);
                    url = "http://www." + url + ".com/feed";
                    // alert(url);
                    initialize(url);
                });
                $("#inkthemes").click(function() {
                    var url = $("#inkthemes").attr("id");
                    //alert(url);
                    url = "http://www." + url + ".com/feed";
                    // alert(url);
                    initialize(url);
                });

            });
