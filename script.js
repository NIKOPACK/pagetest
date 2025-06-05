
(function() {
    'use strict';  // 严格模式，提高代码质量
    
    // ===== 全局配置对象 =====
    const CONFIG = {
        carousel: { 
            autoplaySpeed: 4000     // 轮播图自动播放间隔时间（毫秒）
        },
        music: { 
            volume: 0.3             // 背景音乐音量（0.0-1.0）
        }
    };

    // ===== 工具函数集合 =====
    const Utils = {
        // 选择单个DOM元素（简化版querySelector）
        $(selector) {
            return document.querySelector(selector);
        },
        
        // 选择多个DOM元素（简化版querySelectorAll）
        $$(selector) {
            return document.querySelectorAll(selector);
        },
        
        // 创建DOM元素并可选择性添加类名
        createElement(tag, className) {
            const element = document.createElement(tag);
            if (className) element.className = className;
            return element;
        }
    };

    // ===== 音乐控制器模块 =====
    const MusicController = {
        // 初始化音乐控制功能
        init() {
            const musicBtn = Utils.$('.music-control');      // 获取音乐控制按钮
            const audio = Utils.$('#background-music');      // 获取音频元素
            
            // 如果元素不存在则退出初始化
            if (!musicBtn || !audio) return;

            // 设置音频音量
            audio.volume = CONFIG.music.volume;
            
            // 尝试自动播放音乐
            this.autoPlay(audio, musicBtn);
            
            // 绑定音乐按钮点击事件
            musicBtn.addEventListener('click', () => {
                if (audio.paused) {
                    // 音乐暂停状态 - 开始播放
                    audio.play();
                    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';    // 切换为暂停图标
                    musicBtn.classList.add('playing');                      // 添加播放状态类
                } else {
                    // 音乐播放状态 - 暂停播放
                    audio.pause();
                    musicBtn.innerHTML = '<i class="fas fa-music"></i>';    // 切换为音乐图标
                    musicBtn.classList.remove('playing');                   // 移除播放状态类
                }
            });
        },

        // 自动播放音乐（处理浏览器自动播放限制）
        async autoPlay(audio, musicBtn) {
            try {
                // 页面加载完成后尝试自动播放
                await audio.play();
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';        // 显示暂停图标
                musicBtn.classList.add('playing');                          // 添加播放动画效果
            } catch (error) {
                // 如果自动播放被浏览器阻止，显示播放按钮等待用户手动点击
                console.log('自动播放被阻止，请用户点击按钮播放');
                musicBtn.innerHTML = '<i class="fas fa-music"></i>';        // 显示音乐图标
            }
        }
    };

    // ===== 轮播图管理器模块 =====
    const CarouselManager = {
        // 初始化所有轮播图
        init() {
            const carousels = Utils.$$('.carousel-container');  // 获取所有轮播图容器
            carousels.forEach(carousel => this.initCarousel(carousel));  // 逐个初始化
        },

        // 初始化单个轮播图
        initCarousel(carousel) {
            const slides = carousel.querySelectorAll('.carousel-slide');  // 获取所有幻灯片
            const dots = carousel.querySelectorAll('.nav-dot');          // 获取所有导航点
            

            let currentSlide = 0;          // 当前幻灯片索引
            let autoSlideInterval;         // 自动播放定时器

            // 显示指定索引的幻灯片
            const showSlide = (index) => {
                // 移除所有激活状态
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                // 激活指定幻灯片和导航点
                slides[index].classList.add('active');
                dots[index].classList.add('active');
                currentSlide = index;
            };

            // 启动自动轮播
            const startAutoSlide = () => {
                autoSlideInterval = setInterval(() => {
                    const nextSlide = (currentSlide + 1) % slides.length;  // 计算下一张幻灯片索引（循环）
                    showSlide(nextSlide);
                }, CONFIG.carousel.autoplaySpeed);
            };

            // 为导航点绑定点击事件
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const slideIndex = parseInt(dot.getAttribute('data-slide'));  // 获取目标幻灯片索引
                    showSlide(slideIndex);                                        // 显示目标幻灯片
                    clearInterval(autoSlideInterval);                             // 清除当前定时器
                    startAutoSlide();                                             // 重新启动自动播放
                });
            });

            // 鼠标悬停时暂停自动播放，离开时恢复
            carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
            carousel.addEventListener('mouseleave', startAutoSlide);

            // 启动自动播放
            startAutoSlide();
        }
    };

    // ===== 打字机效果模块 =====
    const TypewriterEffect = {
        // 初始化打字机效果
        init() {
            const typingText = Utils.$('.typing-text');  // 获取打字机文字元素
            if (!typingText) return;  // 如果元素不存在则退出
            
            // 延迟1秒后开始打字机效果
            setTimeout(() => {
                this.typeWriter(typingText, '探索_科技_创新_分享', 150);
            }, 1000);
        },

        // 打字机效果实现
        typeWriter(element, text, speed = 100) {
            element.textContent = '';  // 清空原有内容
            let i = 0;  // 字符索引

            // 逐字符显示函数
            const type = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);  // 添加当前字符
                    i++;
                    setTimeout(type, speed);  // 递归调用，实现逐字显示
                }
            };
            type();  // 开始打字
        }
    };

    // ===== 基本交互效果管理器 =====
    const InteractionManager = {
        // 初始化所有交互效果
        init() {
            // "加载更多"按钮交互效果
            const loadMoreBtn = Utils.$('.load-more .btn');
            if (loadMoreBtn) {
                loadMoreBtn.addEventListener('click', function() {
                    const originalText = this.textContent;  // 保存原始文字
                    this.innerHTML = '加载中...';           // 显示加载状态
                    this.disabled = true;                   // 禁用按钮
                    
                    // 模拟加载过程
                    setTimeout(() => {
                        this.innerHTML = originalText + ' ✓';  // 显示成功状态
                        this.disabled = false;                // 重新启用按钮
                        
                        // 2秒后恢复原始状态
                        setTimeout(() => {
                            this.innerHTML = originalText;
                        }, 2000);
                    }, 1500);
                });
            }

            // 文章卡片点击效果（除了"阅读全文"链接）
            Utils.$$('.post-card').forEach(card => {
                card.addEventListener('click', e => {
                    // 如果点击的是"阅读全文"链接，则不处理
                    if (e.target.closest('.read-more')) return;
                    
                    // 获取文章链接并跳转
                    const link = card.querySelector('.read-more')?.getAttribute('href');
                    if (link && link !== '#') window.location.href = link;
                });
            });
        }
    };

    // ===== 点击文字特效管理器 =====
    const ClickTextEffect = {
        // 初始化点击文字特效
        init() {
            // 监听全局点击事件
            document.addEventListener('click', this.createTextEffect.bind(this));
        },

        // 创建点击文字特效
        createTextEffect(e) {
            // 预定义的特效文字数组
            const texts = [
                'Tech✨', 'Pack🚀', 'Code💻', 'AI🤖', 'Future🌟',
                'Innovation💡', 'Digital🔥', 'Smart⚡', 'Design🎨', 'Cloud☁️'
            ];
            
            // 随机选择一个文字
            const randomText = texts[Math.floor(Math.random() * texts.length)];
            const textElement = Utils.createElement('div', 'click-text-effect');
            
            // 预定义的颜色数组
            const colors = ['#667eea', '#764ba2', '#8699b1', '#a3b5c9', '#ff6b6b', '#4ecdc4'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            // 设置特效元素属性
            textElement.textContent = randomText;                              // 设置文字内容
            textElement.style.left = e.clientX + 'px';                        // 设置X坐标（鼠标点击位置）
            textElement.style.top = e.clientY + 'px';                         // 设置Y坐标（鼠标点击位置）
            textElement.style.color = randomColor;                            // 设置随机颜色
            textElement.style.fontSize = (Math.random() * 10 + 14) + 'px';    // 设置随机字体大小
            
            // 将特效元素添加到页面
            document.body.appendChild(textElement);
            
            // 动画完成后移除元素
            setTimeout(() => {
                if (textElement.parentNode) {
                    textElement.parentNode.removeChild(textElement);
                }
            }, 1500);
        }
    };

    // ===== 数字计数动画模块 =====
    const CounterAnimation = {
        // 初始化计数动画
        init() {
            const counters = Utils.$$('.stat-number');  // 获取所有统计数字元素
            
            // 为每个计数器创建动画
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));  // 获取目标数值
                this.animateCounter(counter, target);
            });
        },

        // 执行计数动画
        animateCounter(element, target) {
            let current = 0;                    // 当前数值
            const increment = target / 100;     // 每次增量（分100步完成）
            const duration = 2000;              // 动画总时长（2秒）
            const stepTime = duration / 100;    // 每步时间间隔

            // 定时器实现计数效果
            const timer = setInterval(() => {
                current += increment;           // 增加当前数值
                if (current >= target) {        // 如果达到目标值
                    current = target;           // 设置为目标值
                    clearInterval(timer);       // 清除定时器
                }
                // 更新显示的数字（使用toLocaleString添加千位分隔符）
                element.textContent = Math.floor(current).toLocaleString();
            }, stepTime);
        }
    };

    // ===== 技术标签悬浮效果模块 =====
    const TechTagEffects = {
        // 初始化技术标签效果
        init() {
            const techTags = Utils.$$('.tech-tag');  // 获取所有技术标签
            
            // 为每个技术标签绑定悬浮效果
            techTags.forEach(tag => {
                tag.addEventListener('mouseenter', this.addHoverEffect.bind(this));    // 鼠标进入事件
                tag.addEventListener('mouseleave', this.removeHoverEffect.bind(this)); // 鼠标离开事件
            });
        },

        // 添加悬浮效果
        addHoverEffect(e) {
            const tag = e.target;
            tag.style.transform = 'scale(1.1) rotate(2deg)';                 // 放大并轻微旋转
            tag.style.boxShadow = '0 8px 25px rgba(134, 153, 177, 0.5)';    // 添加阴影
        },

        // 移除悬浮效果
        removeHoverEffect(e) {
            const tag = e.target;
            tag.style.transform = 'scale(1) rotate(0deg)';                   // 恢复原始大小和角度
            tag.style.boxShadow = 'none';                                    // 移除阴影
        }
    };

    // ===== 模块初始化 =====
    // 当DOM内容加载完成后，初始化所有功能模块
    document.addEventListener('DOMContentLoaded', () => {
        console.log('TechPack博客初始化开始...');  // 调试信息
        
        // 按顺序初始化各个功能模块
        MusicController.init();        // 初始化音乐控制器
        CarouselManager.init();        // 初始化轮播图管理器
        TypewriterEffect.init();       // 初始化打字机效果
        InteractionManager.init();     // 初始化基本交互效果
        ClickTextEffect.init();        // 初始化点击文字特效
        CounterAnimation.init();       // 初始化数字计数动画
        TechTagEffects.init();         // 初始化技术标签效果
        
        console.log('TechPack博客初始化完成！');  // 调试信息
    });

})();  // 立即执行函数表达式结束
