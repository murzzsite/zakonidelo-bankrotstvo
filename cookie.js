(function(){
  var KEY='cookie_notice_ok';
  try { if (localStorage.getItem(KEY)) return; } catch(e) {}
  var css=document.createElement('style');
  css.textContent='.ck{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;background:#F4F5F1;color:#18211B;border:1px solid #D9E2D6;border-radius:4px;box-shadow:0 10px 30px rgba(0,0,0,.14);padding:14px 16px;display:flex;gap:14px;align-items:center;font:400 14px/1.45 \'Golos Text\',system-ui,sans-serif}.ck p{margin:0;flex:1}.ck a{color:inherit;text-decoration:underline}.ck button{flex:none;cursor:pointer;border:0;border-radius:4px;background:#3F5C48;color:#FFFFFF;padding:10px 18px;font:600 14px/1 \'Golos Text\',system-ui,sans-serif}@media(max-width:480px){.ck{flex-direction:column;align-items:stretch;gap:10px}}';
  document.head.appendChild(css);
  function show(){
    var d=document.createElement('div'); d.className='ck'; d.setAttribute('role','region'); d.setAttribute('aria-label','Уведомление о cookie');
    d.innerHTML='<p>Сайт использует cookie и память браузера, чтобы работать корректно. Продолжая пользоваться сайтом, вы соглашаетесь с этим. <a href="privacy.html">Подробнее</a></p><button type="button">Понятно</button>';
    d.querySelector('button').addEventListener('click',function(){
      try { localStorage.setItem(KEY,'1'); } catch(e) {}
      d.remove();
    });
    document.body.appendChild(d);
  }
  if (document.body) show(); else document.addEventListener('DOMContentLoaded',show);
})();
