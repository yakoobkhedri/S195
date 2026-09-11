   document.addEventListener('DOMContentLoaded', function () {
      const steps = document.querySelectorAll('.step');
      const stepContents = {
        1: document.querySelector('.step1content'),
        2: document.querySelector('.step2content'),
        3: document.querySelector('.step3content'),
        4: document.querySelector('.step4content'),
      };

      const gotoStep2 = document.getElementById('gotoStep2');
      const gotoStep3 = document.getElementById('gotoStep3');
      const gotoStep4 = document.getElementById('gotoStep4');
      const backtoStep1 = document.getElementById('backtoStep1');
      const backtoStep2 = document.getElementById('backtoStep2');

      // مرحله 1
      const complaintText = document.getElementById('complaintText');
      const serviceType = document.getElementById('serviceType');
      const problemType = document.getElementById('problemType');
      const category = document.getElementById('category');
      const sendBtn = document.querySelector('.senBtn'); // دکمه ارسال 

      // مرحله 2
      const phoneNumber = document.getElementById('phoneNumber');
      const lineType = document.getElementById('lineType');
      const operator = document.getElementById('operator');
      const province = document.getElementById('province');
      const city = document.getElementById('city');
      const village = document.getElementById('village');
      const fromDate = document.getElementById('fromDate');
      const toDate = document.getElementById('toDate');
      const fromTime = document.getElementById('fromTime');
      const toTime = document.getElementById('toTime');
      const ticketCode = document.getElementById('ticketCode');
      const plaque = document.getElementById('plaque');
      const floor = document.getElementById('floor');
      const unit = document.getElementById('unit');
      const address = document.getElementById('address');

      function goToStep(stepNumber) {
        Object.values(stepContents).forEach(content => content.classList.add('d-none'));
        stepContents[stepNumber].classList.remove('d-none');

        steps.forEach(step => {
          const stepNum = parseInt(step.getAttribute('data-step'));
          if (stepNum <= stepNumber) {
            step.classList.add('active');
          } else {
            step.classList.remove('active');
          }
        });

        if (stepNumber === 4) {
          generateTrackingCode();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // --- مرحله 1: فعال/غیرفعال کردن دکمه ارسال با پر شدن متن شکایت ---
      complaintText.addEventListener('input', function () {
        if (sendBtn) {
          sendBtn.disabled = this.value.trim() === '';
        }
      });

      function checkStep1Validity() {
        const isValid =
          complaintText.value.trim() !== '' &&
          serviceType.value !== '' &&
          problemType.value !== '' &&
          category.value !== '';
        gotoStep2.disabled = !isValid;
      }

      function checkStep2Validity() {
        const isValid =
          phoneNumber.value.trim() !== '' &&
          lineType.value !== '' &&
          operator.value !== '' &&
          province.value !== '' &&
          city.value !== '' &&
          village.value !== '' &&
          fromDate.value.trim() !== '' &&
          toDate.value.trim() !== '' &&
          fromTime.value.trim() !== '' &&
          toTime.value.trim() !== '' &&
          ticketCode.value.trim() !== '' &&
          plaque.value.trim() !== '' &&
          floor.value.trim() !== '' &&
          unit.value.trim() !== '' &&
          address.value.trim() !== '';
        gotoStep3.disabled = !isValid;
      }

      // --- رویدادهای مرحله 1 ---
      [complaintText, serviceType, problemType, category].forEach(el => {
         if(el){
           el.addEventListener('input', checkStep1Validity);
           el.addEventListener('change', checkStep1Validity);
         }
      });

      // --- رویدادهای مرحله 2 ---
      [phoneNumber, lineType, operator, province, city, village,
        fromDate, toDate, fromTime, toTime, ticketCode,
        plaque, floor, unit, address].forEach(el => {
          if(el){
            el.addEventListener('input', checkStep2Validity);
            el.addEventListener('change', checkStep2Validity);
          }
        });

      gotoStep2.addEventListener('click', () => goToStep(2));
      gotoStep3.addEventListener('click', () => goToStep(3));
      gotoStep4.addEventListener('click', () => goToStep(4));
      backtoStep1.addEventListener('click', () => goToStep(1));
      backtoStep2.addEventListener('click', () => goToStep(2));

      function generateTrackingCode() {
        const code = 'TRK-' + Math.floor(100000 + Math.random() * 900000);
        document.getElementById('trackingCode').value = code;
      }

      document.getElementById('copyTrackingCode').addEventListener('click', function () {
        const trackingInput = document.getElementById('trackingCode');
        trackingInput.select();
        document.execCommand('copy');
        alert('کد رهگیری کپی شد!');
      });

      document.getElementById('newComplaint').addEventListener('click', function () {
        document.querySelectorAll('form').forEach(form => form.reset());
        gotoStep2.disabled = true;
        gotoStep3.disabled = true;
        goToStep(1);
      });

      document.getElementById('followUp').addEventListener('click', function () {
        alert('در حال انتقال به صفحه پیگیری...');
      });

      checkStep1Validity();
      checkStep2Validity();
    });