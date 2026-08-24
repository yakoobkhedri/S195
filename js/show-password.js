 (function() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleBtn = document.getElementById('togglePassword');
    const eyeIcon = document.getElementById('iconEye');
    const eyeSlashIcon = document.getElementById('iconEyeSlash');

    // تابع برای تغییر وضعیت
    function togglePasswordVisibility() {
      // بررسی نوع فعلی اینپوت
      const isPassword = passwordInput.type === 'password';
      
      // تغییر نوع اینپوت
      passwordInput.type = isPassword ? 'text' : 'password';
      
      // جابه‌جایی آیکون‌ها با کلاس d-none
      if (isPassword) {
        // در حالت رمز (مخفی) بود → تبدیل به متن (نمایش) → آیکون چشم‌بسته نشان داده شود
        eyeIcon.classList.add('d-none');
        eyeSlashIcon.classList.remove('d-none');
      } else {
        // در حالت متن (نمایش) بود → تبدیل به رمز (مخفی) → آیکون چشم‌باز نشان داده شود
        eyeSlashIcon.classList.add('d-none');
        eyeIcon.classList.remove('d-none');
      }
    }

    // افزودن رویداد کلیک به دکمه
    toggleBtn.addEventListener('click', togglePasswordVisibility);
  })();