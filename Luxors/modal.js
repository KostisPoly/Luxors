window.onload=function(){
    const body = document.querySelector("body");
    const modalRent = document.querySelector(".modal-rent");
    const modalChefeur = document.querySelector(".modal-chefeur");
    const modalRentButton = document.querySelector(".modal-rent-button");
    const modalChefeurButton = document.querySelector(".modal-chefeur-button");
    const closeButton = document.querySelectorAll(".close-button");
    //let isOpened = false;

    const openModal = (event) => {

        event.target.className == 'modal-rent-button' ? 
            modalRent.classList.add("is-open") :
            modalChefeur.classList.add("is-open");
        body.style.overflow = "hidden";
    };

    const closeModal = () => {
        modalRent.classList.remove("is-open");
        modalChefeur.classList.remove("is-open");
        body.style.overflow = "initial";
    };

    modalRentButton.addEventListener("click", openModal);
    modalChefeurButton.addEventListener("click", openModal);
    closeButton.forEach(element => {
        element.addEventListener("click", closeModal);
    });
    

    document.onkeydown = evt => {
        evt = evt || window.event;
        evt.keyCode === 27 ? closeModal() : false;
    };

    $('input[name="daterange"]').daterangepicker({
        timePicker: true,
        startDate: moment().startOf('hour'),
        locale: {
            format: 'MMMM D, hh:mm A'
        }
    });
}