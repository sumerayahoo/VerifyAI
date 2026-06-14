const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggle.textContent = "☀️";
    }
    else{
        toggle.textContent = "🌙";
    }

});


const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", async () => {

    const newsText =
    document.getElementById("newsInput").value;

    if(!newsText.trim()){
        alert("Please enter some news text.");
        return;
    }

    const badge =
    document.getElementById("statusBadge");

    const confidence =
    document.getElementById("confidence");

    const explanation =
    document.getElementById("explanation");

    badge.textContent = "Analyzing...";
    confidence.textContent = "...";
    explanation.textContent =
    "VerifyAI is checking the article...";

    try{

        const response = await fetch(
            "http://127.0.0.1:5000/predict",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    news:newsText
                })
            }
        );

        const data =
        await response.json();

        badge.textContent =
        data.prediction;

        if(data.prediction === "Real News"){

            badge.style.background =
            "#22c55e";

            badge.style.color =
            "white";

        }else{

            badge.style.background =
            "#ef4444";

            badge.style.color =
            "white";

        }

        confidence.textContent =
        "AI Prediction";

        explanation.textContent =
        "Prediction completed successfully.";

        displayNews(
            data.related_news
        );

    }

    catch(error){

        console.error(error);

        badge.textContent =
        "Server Error";

    }

});
function displayNews(news){

    const container =
    document.getElementById(
        "newsContainer"
    );

    container.innerHTML = "";

    news.forEach(article => {

        container.innerHTML += `
        <div class="news-card">

            <h3>${article.title}</h3>

            <p>
                Source:
                ${article.source}
            </p>

            <a
              href="${article.url}"
              target="_blank"
            >
                Read Article →
            </a>

        </div>
        `;

    });

}
if (!sessionStorage.getItem('introDone')) {
        sessionStorage.setItem('introDone', 'true');
        window.location.href = 'logo.html';
      }