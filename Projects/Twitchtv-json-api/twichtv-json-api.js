
var ar = ["esl_sc2", "OgamingSC2", "cretetion","beohoff","brunofin","comster404", "freecodecamp", "medrybw", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function() {
    $("#btn_all").on("click", function() {
        var url = "https://api.twitch.tv/kraken/users/";
        getChannels(url);
    });

    $("#btn_online").on("click", function() {
        var url = "https://api.twitch.tv/kraken/streams/";
        getChannels(url, true);
    });

    $("#btn_offline").on("click", function() {
        var url = "https://api.twitch.tv/kraken/streams/";
        getChannels(url, false);
    });

});
function updatehtml($div,channelName)
{
var $anc=$("<a>", {
                                href: "https://www.twitch.tv/" + channelName,
                                target: "_blank"
                            }).html(channelName).appendTo($div);
                 
                 ($anc).attr("id", "anc");
}

function getChannels(url, isOnline) {
    
    $("#channelList").html("");
 
    for (i = 0; i < ar.length; i++) {
        $.ajax({
            type: 'GET',
            dataType: "json",
            async: false,
            url: url + ar[i] + '?callback=?',
            success: function(data) {
                console.log(data);
               var $div = $("<div>").appendTo($("#channelList"));
                
                if (isOnline == null) {
                    var channelName = data.display_name;
                    ($div).attr("id", "channelName");
                 
                   
                  if(data.logo!=null)
                    {
                  var $img=$("<img>", {
                         src: data.logo,
                         height: "40",
                        width: "40"
                     }).appendTo($div);
                  ($img).attr('id', 'val');
                    updatehtml($div,channelName,$img);
                    }
                  else
                    {
                      ($div).attr("id", "channelName");
                      var $img=$("<img>", {
                         src: "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
                         height: "40",
                        width: "40"
                     }).appendTo($div);;
                  updatehtml($div,channelName,$img);
                      ($div).append("<span class='txt'>Account closed</span>");
                 
                 ($anc).attr("id", "anc");
                      
                    }
                    
                 
                     
                } else {
                    var channelUrl = data._links.channel;
                    var channelName = channelUrl.substr(channelUrl.lastIndexOf("/") + 1);
                    ($div).attr("id", "channelName1");
                    if (isOnline) {
                        if (data.stream) {
                            
                          var $img= $("<img>", {
                                 src: data.stream.channel.logo,
                                  alt:"",
                            
                                 height: "30",
                                width: "30"
                            }).appendTo($div);
                          
                          
                          ($img).attr('id', 'val');
                          
                           updatehtml($div,channelName,$img); 
                          ($div).append('&nbsp;<span class="online glyphicon glyphicon-ok green indicator"></span><br><span class="txt1">'+data.stream.channel.status+'</span>');
                          
                        }
                    } 
                  
                  else {
                        if (!data.stream) {
                            
                          ($div).attr("id", "channelName");
                          var $img= $("<img>", {
                                 src: "http://static-cdn.jtvnw.net/jtv-static/404_preview-300x300.png",
                           height: "40",
                                width: "40"
                            }).appendTo($div);
                          ($img).attr('id', 'val');
                          ($div).append('&nbsp;<span class="offline glyphicon glyphicon-alert red indicator"></span>');
                            updatehtml($div,channelName,$img);
                          
                        }
                    }
                }
            }
        });
    }
}

