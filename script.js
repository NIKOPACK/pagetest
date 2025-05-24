document.addEventListener('DOMContentLoaded', function() {
    // 粒子背景配置
    particlesJS('particles-js', {
        particles: {
            number: { value: 50 },
            color: { value: "#8699b1" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: { enable: true, color: "#a3b5c9" },
            move: { enable: true, speed: 1 }
        }
    });

    // 导航链接效果
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-3px)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // 滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 加载更多按钮
    const loadMoreBtn = document.querySelector('.load-more .btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            loadMoreBtn.textContent = '加载中...';
            setTimeout(function() {
                loadMoreBtn.textContent = '加载更多文章';
            }, 1000);
        });
    }
    
    // 文章卡片交互
    document.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', e => {
            if (e.target.closest('.read-more')) return;
            const link = card.querySelector('.read-more').getAttribute('href');
            if (link) window.location.href = link;
        });
    });
    
    // 文章轮播图功能
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.nav-dot');
        let currentSlide = 0;
        let autoSlideInterval;
        
        // 初始化自动轮播
        startAutoSlide();
        
        // 点击导航点切换轮播
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                showSlide(slideIndex);
                resetAutoSlide();
            });
        });
        
        // 鼠标悬停在轮播图上暂停自动播放
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        // 鼠标离开轮播图继续自动播放
        carousel.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }
        
        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                let nextSlide = (currentSlide + 1) % slides.length;
                showSlide(nextSlide);
            }, 2000); 
        }
        
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }
    });
});
