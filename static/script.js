document.addEventListener('DOMContentLoaded', () => {
    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        });
    };
      
    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
      
    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach(EL => {
        Obs.observe(EL, obsOptions);
    });

    document.getElementById('eplbtn').onclick = () => document.getElementById('explore').scrollIntoView({behavior: 'smooth'});
    document.getElementById('navexplore').onclick = () => document.getElementById('explore').scrollIntoView({behavior: 'smooth'});
    document.getElementById('navcontact').onclick = () => document.getElementById('contact').scrollIntoView({behavior: 'smooth'});

    document.getElementById('navabout').onclick = () => {
        document.getElementById('about').style.display = "block";
        document.getElementById('about').scrollIntoView({behavior: 'smooth'});

        var aboutd5l1 = ["Story Teller", "Explorer", "Collaborator"];
        var i = 0;
        setInterval(function() {
            document.getElementById('aboutd5l1').innerHTML = aboutd5l1[i++];
            if (i == aboutd5l1.length) i = 0; 
        }, 2000);
        var aboutd5l2 = ["Music", "Meowww", "History", "Movies", "Travelling"];
        var j = 0;
        setInterval(function() {
            document.getElementById('aboutd5l2').innerHTML = aboutd5l2[j++];
            if (j == aboutd5l2.length) j = 0; 
        }, 2000);
    }
    document.getElementById('abouts1').onclick = () => {
        document.getElementById('about').style.display = "none";
    }
    const spans = document.querySelectorAll('#aboutd4 span');

    [...spans].forEach(span => {
        span.addEventListener('mouseover', () => {
            span.children.item(1).innerHTML = span.dataset.name;
        });
    });
    [...spans].forEach(span => {
        span.addEventListener('mouseout', () => {
            span.children.item(1).innerHTML = "";
        });
    })
});