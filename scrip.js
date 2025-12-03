        // Animación de elementos al hacer scroll
        document.addEventListener('DOMContentLoaded', function() {
            // Detectar scroll para animaciones
            const elementosFade = document.querySelectorAll('.fade-in-up');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            elementosFade.forEach(element => {
                observer.observe(element);
            });
            
            // Manejo del formulario
            document.getElementById('formContacto').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Aquí normalmente se enviaría el formulario a un servidor
                // Por ahora, solo mostraremos un mensaje de confirmación
                alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                document.getElementById('formContacto').reset();
            });
            
            // Smooth scroll para enlaces internos
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Cerrar el menú en dispositivos móviles
                        if (window.innerWidth < 992) {
                            const navbarCollapse = document.querySelector('.navbar-collapse');
                            if (navbarCollapse.classList.contains('show')) {
                                const navbarToggler = document.querySelector('.navbar-toggler');
                                navbarToggler.click();
                            }
                        }
                    }
                });
            });
            
            // Actualizar año en el footer
            document.getElementById('currentYear').textContent = new Date().getFullYear();
            
            // Animación del botón de WhatsApp
            const whatsappBtn = document.getElementById('whatsappBtn');
            
            // Función para activar la animación de vibración cada 30 segundos
            function activateVibration() {
                // Agregar la clase de vibración
                whatsappBtn.classList.add('vibrate');
                
                // Quitar la clase después de 1.5 segundos (duración de la animación)
                setTimeout(() => {
                    whatsappBtn.classList.remove('vibrate');
                }, 1500);
                
                // Programar la próxima vibración en 30 segundos
                setTimeout(activateVibration, 30000);
            }
            
            // Iniciar la animación después de 10 segundos de carga
            setTimeout(activateVibration, 10000);
            
            // Ejemplo de cómo cargar tu logo (reemplaza el placeholder)
            function cargarLogo() {
                // Esta función es un ejemplo de cómo cargarías tu logo
                // Reemplaza los placeholders con tu imagen real
                const logoPlaceholders = document.querySelectorAll('.logo-placeholder');
                
                // Si tienes la URL de tu logo, descomenta las siguientes líneas:
                // const logoUrl = 'ruta/a/tu/logo.png';
                // logoPlaceholders.forEach(placeholder => {
                //     placeholder.innerHTML = `<img src="${logoUrl}" alt="INVERSIONES MAJAVI" style="width:100%; height:100%; object-fit:contain; border-radius:8px;">`;
                // });
            }
            
            // Llamar a la función para cargar el logo
            cargarLogo();
        });