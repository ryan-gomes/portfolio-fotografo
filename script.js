// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de fade-in para elementos ao scrollar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar observer aos elementos da portfolio
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Aplicar observer à seção about
const aboutSection = document.querySelector('.about-section');
aboutSection.style.opacity = '0';
aboutSection.style.transform = 'translateY(20px)';
aboutSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
observer.observe(aboutSection);

// Aplicar observer à seção contact
const contactSection = document.querySelector('.contact-section');
contactSection.style.opacity = '0';
contactSection.style.transform = 'translateY(20px)';
contactSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
observer.observe(contactSection);

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulação de envio do formulário
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData);
    
    console.log('Formulário enviado:', formObject);
    
    // Limpar formulário
    this.reset();
    
    // Feedback visual
    const submitButton = this.querySelector('button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Mensagem enviada!';
    submitButton.style.background = '#28a745';
    
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.background = '#000000';
    }, 3000);
});

// Navbar transparency on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});