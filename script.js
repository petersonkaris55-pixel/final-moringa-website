
document.addEventListener('DOMContentLoaded',function (){
    //1.select the elements
    const bookingForm = document.querySelector('#resForm');
    const summaryContainer = document.querySelector('#confirmDetails');
    const dateInput=document.querySelector('input[type="date"]')

    //2.reservation page logic
    if(dateInput){
        const today=new Date().toISOString().split('T')[0]
        dateInput.setAttribute('min',today)
    }
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
                createdAt: new Date().toLocaleString()
            };
            //ensure dropdowns were selected
            if(!guestData.partysize && !guestData.location){
                alert("Please select your guest count and seating prefrence.")
                return;
            }
            //store object in browser memory
            localStorage.setItem('ivoryReservation',JSON.stringify(guestData));
            //navigate/redirect to the summary page
            window.location.href = 'confirmation.html';

        });
    }
    //confirmation page logic
    if(summaryContainer){
        const storedBooking=localStorage.getItem('ivoryReservation');

        if(storedBooking){
            const parsedData=JSON.parase(storedBooking);

            summaryContainer.innerHTML= `
            <div class="summary-box" style="border-top:1px solid rgba(255,255,255,0.2);margin-top:20px;padding-top:20px;text-align:left;">
            <h3 style="color:burlywood;letter-spacing:2px;">BOOKING SUMMARY</h3>
            <P><strong>Guest:</strong>${parsedData.guestName}</P>
            <P><strong>Schedule:</strong>${parsedData.guestName} at ${parsedData.resTime}</P>
            <P><strong>Details:</strong></P> ${parsedData.guestName}guests in the ${parsedData.location}area</p>
            <small style="opacity:0.6;">Reservation on:${parsedData.createdAt}</small>
            </div>
            `;
        }else{
            summaryContainer.innerHTML=`<p>No recent booking found.Please return to the reservation page.</p>`;
        }
    }
})

