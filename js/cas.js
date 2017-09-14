/*
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License.  You may obtain a
 * copy of the License at the following location:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$(document).ready(function(){
    //focus username field
    $("input:visible:enabled:first").focus();
    //flash error box
    $('#msg.errors').animate({ backgroundColor: 'rgb(187,0,0)' }, 30).animate({ backgroundColor: 'rgb(255,238,221)' });

    //flash success box
    $('#msg.success').animate({ backgroundColor: 'rgb(51,204,0)' }, 30).animate({ backgroundColor: 'rgb(221,255,170)' });
    
    //flash confirm box
    $('#msg.question').animate({ backgroundColor: 'rgb(51,204,0)' }, 30).animate({ backgroundColor: 'rgb(221,255,170)' });
    
    /* 
     * Using the JavaScript Debug library, you may issue log messages such as: 
     * debug.log("Welcome to Central Authentication Service");
     */
});


$(function(){
    $("#loginBtn").attr({"disabled":"disabled"});
    $("#loginBtn").css("opacity","0.8");
    $("#username").bind('input propertychange',function () {
        var username = $("#username").val();
        var password = $("#password").val();
        if(username==""&&password==""){
            $("#loginBtn").attr({"disabled":"disabled"});
            $("#loginBtn").css("opacity","0.8");
        }
        if(username!==""&&password!==""){
            $("#loginBtn").removeAttr("disabled");
            $("#loginBtn").css("opacity","1");
        }
    });
    $("#password").bind('input propertychange',function () {
        var username = $("#username").val();
        var password = $("#password").val();
        if(username==""&&password==""){
            $("#loginBtn").attr({"disabled":"disabled"});
            $("#loginBtn").css("opacity","0.8");
        }
        if(username!==""&&password!==""){
            $("#loginBtn").removeAttr("disabled");
            $("#loginBtn").css("opacity","1");
        }
    });

    $("#username").css("border-bottom","1px solid rgb(88, 201, 243)");
    $("#username").focus(function(){
        $(this).css("border-bottom","1px solid rgb(88, 201, 243)");
    });
    $("#username").blur(function(){
        $(this).css("border-bottom","1px solid #DDDDDD");
    });
    $("#password").focus(function(){
        $(this).css("border-bottom","1px solid rgb(88, 201, 243)");
    });
    $("#password").blur(function(){
        $(this).css("border-bottom","1px solid #DDDDDD");
    });
});

document.onkeydown = function (e) {//键盘按键控制
    e = e || window.event;
    if ((e.ctrlKey && e.keyCode === 82) || //ctrl+R
        e.keyCode === 116) {//F5刷新，禁止
        //延时提醒，要不alert会导致return false被alert挂起从而浏览器执行了刷新
        setTimeout(function () {
            location.reload(true);
            }, 100);
        return false
    }
};













