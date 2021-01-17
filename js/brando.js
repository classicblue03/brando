// 즉시 표현함수 (오픈소스와 충돌방지)
//IIFE 즉시 실행함수 표현식
;(function($, window, document, undefined){     //매개변수, argument에서 등록되지않은함수 = undefined (이름설정은 상관없음)
        //ECMA Script 5

        var brando = {
            init:       function(){             //메서드(익명함수 === 리터럴함수)
                this.smoothScrollFn();
                this.headerFn();
                this.section0234Fn();           //section01~04 반응형
                this.section06Fn();
                this.section07Fn();
                this.section09Fn();
                this.section10Fn();
                this.section11Fn();
                this.section12Fn();
                this.section13Fn();
                this.section14Fn();
            },

            //전체 공용함수, smoothScrolling 이벤트함수
            smoothScrollFn: function(){
                var $smoothBtn  = $('.smoothBtn');
                var $htmlBody   = $('html,body');
                var $mobile     = $('.mobile');

                    $smoothBtn.on({
                        click:  function(event){
                            event.preventDefault();                
                            $this = $(this);

                            var url = $(this).attr('href');
                            $htmlBody.stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInQuad');
                            $mobile.stop().slideUp(300);   //모바일메뉴 안보이게 처리
                        }
                    });


            },//end

            //header 스크롤이벤트(페럴럭스)
            headerFn:   function(){
                var $window     = $(window);
                var $header     = $('#header');
                var $mobilebtn  = $('.mobilebtn')
                var $mobile     = $('.mobile')

                    //스크롤값이 30px이상 내려갈때 선택자 header영역에 이벤트발생.
                    $window.scroll(function(){                  
                        if( $window.scrollTop() >=30 ){             //30px이상 내려가면
                            $header.addClass('addHeader');          //헤더에 class추가
                        }else{
                            $header.removeClass('addHeader');       //헤더에 추가된 class삭제
                        }
                    });

                    //모바일버튼 클릭이벤트
                    $mobilebtn.on({
                        click:  function(){
                            $mobile.stop().slideToggle(300);
                        }
                    });
                    
                    //모바일메뉴가 노출된경우
                    //창너비가 980초과이면 slideUp()으로 강제로 안보이게 처리.
                    function resizeFn(){
                        if( $window.innerWidth() > 980 ){
                            $mobile.stop().slideUp(0);
                        }
                    }
                    setTimeout(resizeFn,100);       //새로고침할때 (로딩시)

                    $window.resize(function(){      //창크기가 변경시
                        resizeFn();
                    });

            },//end


            section0234Fn:   function(){
                //section01 높이를 window높이로 설정하고 반응형으로 작업
                //pc,tab,mobile 등의 크기에 반응하도록(Resize)

                //window높이가 컨텐츠박스 높이보다 작으면
                //window높이를 컨텐츠박스 높이로 설정하는 반응형알고리즘
                var $window         = $(window);
                var $section0234    = $('#main #section01, #main #section02, #main #section03, #main #section04');
                var $winH           = $window.innerHeight();    //window 높이
                var $box            = $('#main .section0234 .box')
                var $boxH           = $box.innerHeight();       //section2,3.4에서만 사용 (패딩을포함한 내부크기)

                    function resizeFn(){
                        $winH = $window.innerHeight();          //window 높이 즉시가져오기
                        $boxH = $box.innerHeight();             //박스높이
                        if( $winH < $boxH+80 ){                 //창높이가 컨텐츠박스높이보다 작으면
                            $winH = $boxH+80;                   //창높이=박스높이, 위아래40씩 여백추가
                        }
                        $section0234.css({ height:$winH });     //section01~04 window높이 설정
                        $box.css({ marginTop:-($boxH/2) });     //박스높이 / 2
                        //#wrap #main .section0234 .wrap .gap .container .box( 275/2 ), 반만올리기.
                    }
                    setTimeout(resizeFn,100);
                    
                    
                    $window.resize(function(){                  //widow 크기가 *변경될때만 반응,실행한다.    
                        resizeFn();
                    });

            },
            //이미지(bg-image) 오버시 이벤트발생
            section06Fn:   function(){
                var $bgImg   = $('#main #section06 .bg-image')   //section06에서만 사용

                $bgImg.on({
                    mouseenter: function(){
                        var $this = $(this);

                        $bgImg.removeClass('addHover');         //초기화
                        $this.addClass('addHover');             //오버시
                    },
                    focusin: function(){                        //HTML에서 tabtindex="0"설정후 -> 키보드접근 focus,focusin (반대 focusout, blur)
                        $bgImg.removeClass('addHover');         //초기화
                        $this.addClass('addHover');             //오버시
                    }
                });

            },
            //이미지(bg-image) 오버시 이벤트발생
            section07Fn:   function(){
                var $profileGap = $('#main #section07 .profile-gap')    //section07에서만 사용

                $profileGap.on({
                    mouseenter: function(){
                        $profileGap.removeClass('addProfile');          //초기화
                        $(this).addClass('addProfile');                 //오버시
                    },
                    focusin: function(){                                //HTML에서 tabtindex="0"설정후 -> 키보드접근 focus,focusin (반대 focusout, blur)
                        $profileGap.removeClass('addProfile');          //초기화
                        $(this).addClass('addProfile');                 //오버시
                    }

                });
            },
      
            section09Fn:   function(){
                var $window =  $(window);
                var imgW            = $('#main #section09 .gallery-item').innerWidth();   //이미지박스 너비
                var $galleryItem    = $('#main #section09 .gallery-item');    //이미지박스
                var per             = 0.75;
                var imgH            = imgW * per;    //이미지박스 높이
                var $gallBtn         = $('.gall-btn');


            //이미지너비에 따라 높이에 변화를 줘야함
            //이미지박스 높이 = 이미지박스 너비*.75
          
                    $galleryItem.css({height:imgH});

                    function resizeFn(){
                        imgW = $('#main #section09 .gallery-item').innerWidth();   //이미지박스 너비
                        imgH = imgW * per;    //이미지박스 높이
                        $galleryItem.css({height:imgH});

                    }
                    resizeFn(); //로딩시 1번만실행

                    $window.resize(function(){    //반응형너비,높이 변경시마다 계속 수행.
                        resizeFn();
                    });

                    //갤러리버튼 클릭이벤트 (메뉴)
                    $gallBtn.on({
                        click:  function(){
                            $gallBtn.removeClass('addNav');
                            $(this).addClass('addNav');
                        }
                    });


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
            
        };  //객체end

        brando.init();  //초기실행 함수 (brando 전체 메서드실행)

})(jQuery, window, document);   //전달자 argument