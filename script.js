
document.addEventListener('DOMContentLoaded',function (){
    //1.select the elements
    const bookingForm = document.querySelector('#resForm');
    const summaryContainer = document.querySelector('#confirmDetails');

    //2.reservation page logic
    if(bookingForm) {
        bookingForm.addEventListener('submit',function (event){
            event.preventDefault();

            //extract values using a custom data object
            const guestData = {
                guestName:document.getElementById('fullName').Value,
                resDate:document.getElementById('resDate').value,
                resTime:document.getElementById('resTime').value,
                partySize:document.getElementById('guests').value,
                location:document.getElementById('seating').value,
                createdAt:document.getElementById('')
            }
        })
    }
})