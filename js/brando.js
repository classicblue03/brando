// 즉시 표현함수 (오픈소스와 충돌방지)
//IIFE 즉시 실행함수 표현식
;(function($, window, document, undefined){     //매개변수, argument에서 등록되지않은함수 = undefined (이름설정은 상관없음)
        //ECMA Script 5

        //var 객체
        var brando = {
            init:       function(){     //메서드(익명함수 === 리터럴함수)
                this.smoothScrollFn();
                this.headerFn();
                this.section0234Fn();  //section01~04 반응형
                this.section06Fn();
                this.section07Fn();
                this.section08Fn();
                this.section09Fn();
                this.section10Fn();
                this.section11Fn();
                this.section12Fn();
                this.section13Fn();
                this.section14Fn();
            },

            //전체 공용함수, smoothScrolling 이벤트함수
            smoothScrollFn: function(){

                // (구)버튼 클릭이벤트 1
                // $('.smoothBtn')
                //     .on('click',function(event){
                //         event.preventDefault();
                //         alert('클릭');
                // })
                // .on('mouseenter',function(event){
                //     event.preventDefault();
                //     alert('오버시');
                // })
                // .on('mouseleave',function(event){
                //     event.preventDefault();
                //     alert('벗어날때');
                // });

                // (구)버튼 클릭이벤트 2
                // $('.smoothBtn').on({
                //     click:   function(){
                //     event.preventDefault();
                //         alert('클릭');
                //     },
                //     mouseenter: function(event){
                //         event.preventDefault();
                //         alert('오버시');
                //     },
                //     mouseleave: function(event){
                //         event.preventDefault();
                //         alert('벗어날때');
                //     }
                // });

                $('.smoothBtn').on({
                    click:  function(event){
                        event.preventDefault();             //event.stopPropergation(); 자식요소 이벤트를 부모에게 전파를 치단
                        //클릭한버튼(a링크)의 href속성(Attribute, Property)을 가져온다. smoothBtn
                        var url = $(this).attr('href');     //속성을 가져올때
                        // var url = $(this).prop('href');  //속성을 변경할때(절대값주소)
                        // console.log(url);

                        $('html,body').stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInQuad');

                        //모바일메뉴 안보이게 처리
                        $('.mobile').stop().slideUp(300);
                    }
                });

            },//end

            //header 스크롤이벤트(페럴럭스)
            headerFn:   function(){
                var $window = $(window);
                var $header = $('#header');

                //DOM,BOM
                //스크롤값이 30px이상 내려갈때 선택자 header영역에 이벤트발생.
                $window.scroll(function(){                  
                    console.log( $window.scrollTop() );         //scroll Top값 확인
                    if( $window.scrollTop() >=30 ){             //30px이상 내려가면
                        $header.addClass('addHeader');          //헤더에 class추가
                    }else{
                        $header.removeClass('addHeader');       //헤더에 추가된 class삭제
                    }
                });

                //모바일버튼 클릭이벤트
                $('.mobilebtn').on({
                    click:  function(){
                        $('.mobile').stop().slideToggle(300);
                    }
                });
                
                //모바일메뉴가 노출된경우
                //창너비가 980초과이면 slideUp()으로 강제로 안보이게 처리.
                function resizeFn(){
                    if( $(window).innerWidth() > 980 ){
                        $('.mobile').stop().slideUp(0);
                    }
                }
                setTimeout(resizeFn,100);   //새로고침할때 (로딩시)

                $(window).resize(function(){    //창크기가 변경시
                    resizeFn();
                });

            },//end


            section0234Fn:   function(){
                //section01 높이를 window높이로 설정하고 반응형으로 작업
                //pc,tab,mobile 등의 크기에 반응하도록(Resize)

                //window높이가 컨텐츠박스 높이보다 작으면
                //window높이를 컨텐츠박스 높이로 설정하는 반응형알고리즘
                var $window = $(window);
                var $section0234 = $('#section01, #section02, #section03, #section04');
                var $winH = $window.innerHeight();              //window 높이
                var $boxH = $('.box').innerHeight();            //박스높이 (패딩을포함한 내부크기)

                    function resizeFn(){
                        $winH = $window.innerHeight();          //window 높이 즉시가져오기
                        $boxH = $('.box').innerHeight();        //박스높이
                        if( $winH < $boxH+80 ){                 //창높이가 컨텐츠박스높이보다 작으면
                            $winH = $boxH+80;                   //창높이=박스높이, 위아래40씩 여백추가
                        }
                        $section0234.css({ height:$winH });     //section01~04 window높이 설정
                        $('.box').css({ marginTop:-($boxH/2) });//박스높이 / 2
                        //#wrap #main .section0234 .wrap .gap .container .box( 275/2 ), 반만올리기.
                    }

                    setTimeout(resizeFn,100);
                    
                    //widow 크기가 *변경될때만 반응,실행한다.    
                    $window.resize(function(){
                        resizeFn();
                    });

            },
            section06Fn:   function(){
                //이미지(bg-image) 오버시 이벤트발생
                $('.bg-image').on({
                    mouseenter: function(){
                        $('.bg-image').removeClass('addHover'); //초기화
                        $(this).addClass('addHover');   //오버시
                    },
                    focusin: function(){ //HTML에서 tabtindex="0"설정후 -> 키보드접근 focus,focusin (반대 focusout, blur)
                        $('.bg-image').removeClass('addHover'); //초기화
                        $(this).addClass('addHover');   //오버시
                    }
                });

            },
            section07Fn:   function(){
                //이미지(bg-image) 오버시 이벤트발생
                $('.profile-gap').on({
                    mouseenter: function(){
                        $('.profile-gap').removeClass('addProfile'); //초기화
                        $(this).addClass('addProfile');   //오버시
                    },
                    focusin: function(){ //HTML에서 tabtindex="0"설정후 -> 키보드접근 focus,focusin (반대 focusout, blur)
                        $('.profile-gap').removeClass('addProfile'); //초기화
                        $(this).addClass('addProfile');   //오버시
                    }
                });
            },
            section08Fn:   function(){

            },
            section09Fn:   function(){

            },
            section10Fn:   function(){

            },
            section11Fn:   function(){

            },
            section12Fn:   function(){

            },
            section13Fn:   function(){

            },
            section14Fn:   function(){

            }
            
        };  //객체 end

        brando.init();  //초기실행 함수 (brando 전체 메서드실행)

})(jQuery, window, document);  //전달자 argument