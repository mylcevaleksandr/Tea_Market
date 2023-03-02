jQuery( function ( $ ) {
    $( window ).on( "load", function () {
        new WOW( {
            animateClass: "animate__animated"
        } ).init();
        $( ".slider" ).slick( {
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            easing: "easeInOutSine",
            speed: 3000,
            pauseOnFocus: true,
            pauseOnHover: true,
            arrows: true
        } );

        $( "#accordion" ).accordion( {
            heightStyle: "content"
        } );

        $( ".tea-image" ).magnificPopup( {
            type: "image",
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 500
            }
        } );

        let formInputFirstName = $( "#inputFirstName" );
        let formInputSecondName = $( "#inputSecondName" );
        let formInputPhone = $( "#inputPhone" );
        let formInputCountry = $( "#inputCountry" );
        let formInputZip = $( "#inputZip" );
        let formInputAddress = $( "#inputAddress" );
        let formSubmitButton = $( "#submitButton" );
        let formToHide = $( "#formHide" );
        let formToShow = $( "#formToShow" );
        let messageName = $( "#forName" );

        formSubmitButton.on( "click", function ( event ) {
            let formInputFirstNameValue = formInputFirstName.val();
            let formInputSecondNameValue = formInputSecondName.val();
            let formInputPhoneValue = formInputPhone.val();
            let formInputCountryValue = formInputCountry.val();
            let formInputZipValue = formInputZip.val();
            let formInputAddressValue = formInputAddress.val();

            if ( !formInputFirstNameValue ) {
                alert( "Пожалуйста, введите Ваше имя!" );
                return false;
            }
            if ( !formInputSecondNameValue ) {
                alert( "Пожалуйста, введите Вашу фамилию!" );
                return false;
            }
            if ( !formInputPhoneValue ) {
                alert( "Пожалуйста, укажите Ваш контактный номер!" );
                return false;
            }
            if ( !formInputCountryValue ) {
                alert( "Пожалуйста, укажите страну доставки!" );
                return false;
            }
            if ( !formInputZipValue ) {
                alert( "Пожалуйста, укажите индекс адреса!" );
                return false;
            }
            if ( formInputZipValue.length !== 6 ) {
                alert( "Неправильный индекс! Индекс состоит из 6 цифр." );
                return false;
            }
            if ( !formInputAddressValue ) {
                alert( "Пожалуйста, введите адрес доставки!" );
                return false;
            }

            formToHide.addClass( "d-none" );
            messageName.prepend( formInputFirstNameValue + ", " );
            formToShow.removeClass( "d-none" ).addClass( "d-flex" );

            setTimeout( function () {
                location.reload();
            }, 5000 );

            event.preventDefault();
        } );


        formInputPhone.inputmask( { "mask": "+9 (999) 999-99-99" } );


        formInputZip.on( "keydown", function ( event ) {
            let input = event.key;

            if ( input.toLowerCase() === "backspace" || input.toLowerCase() === "tab" ) {
                return;
            }
            if ( isNaN( parseInt( input ) ) ) {
                return false;
            }
        } );
    } );
} );

