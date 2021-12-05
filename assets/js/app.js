var cl = console.log
const button = document.querySelector('.btn')
const pincode = document.querySelector('.pincode')
const table = document.querySelector('.table')
const vaccine_table = document.querySelector('#vaccine_table')

templating = (arr) =>{
    let template =""
    arr.forEach((detail)=>{
        template += `<tr>
        <td>${detail['name']}</td>
        <td>${detail['district_name']}</td>
        <td>${detail['from']}</td>
        <td>${detail['to']}</td>
        <td>${detail['fee_type']}</td>
        <td>${detail['fee']}</td>
        <td>${detail['available_capacity']}</td>
        <td>${detail['available_capacity_dose1']}</td>
        <td>${detail['available_capacity_dose2']}</td>
        <td>${detail['vaccine']}</td>
        </tr>`
    })
    vaccine_table.innerHTML = template   
}


button.addEventListener('click', function () {
    table.style.display = 'block'
    cl(date.value)
    let d = new Date(date.value)
    cl(d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear())

    fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=' + pincode.value + '&date=' + d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear())
        .then(response => response.json())
        .then(data => {
            templating(data['sessions'])
        })
})
