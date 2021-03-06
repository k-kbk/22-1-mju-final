'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'recruits',
      [{
          id: 1,
          title: 'Software Engineer, Backend',
          career: '백엔드',
          content: "Software Engineer는 오늘의집 서비스를 구성하기 위한 소프트웨어 개발 및 이를 운영하기 위한 제반 인프라, 도구를 개발하는 등 소프트웨어 개발 전반에 걸친 업무를 수행합니다. Backend Engineer는 비즈니스 요구사항을 개발 로직으로 전환하는 작업을 진행합니다. 사용자와 어떤 방식으로 데이터를 교환할지 설계하고 개발합니다. 또, 오늘의집 서비스로 유입되는 대용량 트래픽을 감당할 수 있도록 고 가용성과 확장성 있는 아키텍처 설계 및 개발을 담당합니다. MSA 기반으로 서비스를 Re-Architecting 하는 과정을 담당합니다.",
          requirement: "컴퓨터공학 전공 혹은 그에 준하는 전공 및 지식을 보유하신 분\\nKotlin/Java/Python/Ruby 등 하나 이상의 프로그래밍 언어 전문성을 보유하신 분\\nRDBMS 및 다양한 NoSQL 데이터베이스에 대한 지식을 보유하신 분",
          plus: "소규모 프로젝트 리딩 경험이 있는 분\\n대용량 트래픽 처리에 대한 이해 및 서비스 경험이 있는 분\\n전체 SDLC(소프트웨어 생명주기)에 대한 경험이 있는 분\\n애자일 스프린트, MVP 단위 개발 프로세스에서의 개발 경험이 있는 분\\nAWS와 같은 Public Cloud 작업 경험이 있는 분\\n인테리어 산업에 대한 높은 관심과 이해도가 있는 분",
          company_id: 1,
          created_at: new Date('2022-05-30 11:30:00'),
          updated_at: new Date('2022-05-30 11:30:00'),
        },
        {
          id: 2,
          title: 'Software Engineer, Frontend',
          career: '프론트엔드',
          content: "Software Engineer는 오늘의집 서비스를 구성하기 위한 소프트웨어 개발 및 이를 운영하기 위한 제반 인프라, 도구를 개발하는 등 소프트웨어 개발 전반에 걸친 업무를 수행합니다. Frontend Engineer는 오늘의집 서비스를 위한 공통 플랫폼 및 콘텐츠, 커머스, O2O등 다양한 도메인의 Web Application을 설계, 개발, 테스트 및 운영을 담당합니다. 이 과정에서 사용자가 서비스를 이용하는 과정에서 예상되거나 실제로 발생하고 있는 불편함을 줄이기 위한 과업을 수행합니다.",
          requirement: "컴퓨터공학 전공 혹은 그에 준하는 전공 및 지식을 보유하신 분\\nReact에 대한 이해 및 프로젝트 경험이 있는 분\\n서버 사이드 렌더링(SSR)에 대한 이해 및 처리 경험이 있는 분\\nMSA, BFF(Backend For Frontend)에 대한 이해가 있는 분\\nSPA Framework에 대한 이해가 있는 분",
          plus: "소규모 프로젝트 리딩 경험이 있는 분\\n측정 가능한 데이터 기반의 성능 최적화 경험이 있는 분\\n테스트 및 CI/CD 경험이 있는 분\\n애자일 스프린트, MVP 단위 개발 프로세스에서의 개발 경험이 있는 분\\n요구사항들을 일반화하여 컴포넌트나 라이브러리를 제작한 경험이 있는 분\\nBFF (Backend For Frontend) 설계, 개발 경험이 있는 분\\n인테리어 산업에 대한 관심과 이해도가 높은 분",
          company_id: 1,
          created_at: new Date('2022-05-30 11:35:00'),
          updated_at: new Date('2022-05-30 11:35:00'),
        },
        {
          id: 3,
          title: 'Software Engineer, Android',
          career: '안드로이드',
          content: "Software Engineer는 오늘의집 서비스를 구성하기 위한 소프트웨어 개발 및 이를 운영하기 위한 제반 인프라, 도구를 개발하는 등 소프트웨어 개발 전반에 걸친 업무를 수행합니다. Android Engineer는 오늘의집 안드로이드 앱의 설계, 개발, 테스트 및 운영을 담당합니다. 단순히 요구사항을 구현하는 것을 넘어 사용자가 오늘의집 앱을 통해 최고의 경험을 할 수 있도록 다양한 방법을 제안하고, 시도합니다. 이를 위해 다양한 팀들과 협업을 하며 다양한 비지니스 문제를 해결하는 역할을 담당합니다.",
          requirement: "컴퓨터공학 전공 혹은 그에 준하는 전공 및 지식을 보유하신 분\\nKotlin을 이용한 서비스 개발 및 런칭 경험이 있는 분\\nMVVM, AAC에 대한 이해 및 서비스에 적용 경험이 있는 분",
          plus: "소규모 프로젝트 리딩 경험이 있는 분\\n클린 아키텍처를 실제 서비스에 적용한 경험이 있는 분\\n테스트코드, 특히 kotest를 이용한 테스트 코드 적용 경험이 있는 분\\nAndroid Compose를 이용한 실무 개발 경험이 있는 분\\n안드로이드 CI / CD 환경 구축 경험이 있는 분\\n애자일 스프린트, MVP 단위 개발 프로세스에서의 개발 경험이 있는 분\\n인테리어 산업에 대한 높은 관심과 이해도가 있는 분",
          company_id: 1,
          created_at: new Date('2022-05-30 11:37:00'),
          updated_at: new Date('2022-05-30 11:37:00'),
        },
        {
          id: 4,
          title: 'DevOps Engineer',
          career: '데브옵스',
          requirement: "컴퓨터공학 전공 혹은 그에 준하는 전공 및 지식을 보유하신 분\\nPublic Cloud 환경에 서비스를 배포해 본 경험이 있는 분\\nPython, Javascript, Go 등의 프로그래밍 언어를 통한 소프트웨어 개발 경험이 있는 분",
          plus: "docker, Kubernetes 및 Helm Chart 사용 경험이 있는 분\\nKubernetes 상에서 Istio 같은 Service Mesh 사용 경험이 있는 분\\nTerraform 등으로 IaC 구현한 경험이 있는 분\\nCircleCI, Github Action 등으로 CI/CD 파이프라인을 구축 및 운영한 경험이 있는 분\\nOpen Source Project 참여 경험이 있는 분\\n인테리어 산업에 대한 높은 관심과 이해도가 있는 분",
          content: "DevOps Engineer는 버킷플레이스에 최적화된 DevOps 문화를 만들어 나갑니다. 안정되고 안전한 소프트웨어의 빠른 릴리즈를 보장하는 여러 역할과 운영환경의 성능, 가용성을 보장하는 역할을 수행합니다. 소프트웨어 개발, 테스트, 운영하는 각각 환경에 대한 CI/CD 파이프라인을 제공하고, 효율적으로 이를 관리하기 위한 플랫폼, 자동화 도구를 개발하고 모니터링 관리합니다.",
          company_id: 1,
          created_at: new Date('2022-05-30 11:38:00'),
          updated_at: new Date('2022-05-30 11:38:00'),
        },
        {
          id: 5,
          title: 'Frontend 개발자',
          career: '프론트엔드',
          content: "긱-하!\\n긱블은 누구든 재미있고 쉽게 과학-공학을 즐길 수 있는 콘텐츠를 만드는 과학/공학 미디어 스타트업입니다. 현재 34명의 동료와 약 88만 명의 구독자 분들과 함께 '과학/공학을 세상의 좋은 이야기로 만든다'라는 미션을 목표로 과학-공학의 매력을 널리 알리고 있습니다.  긱블은 영상 뿐만이 아닌 다양한 방법으로 과학/공학을 대중화시킬 수 있는 길을 찾고 있습니다. 그리고 그 도전의 일환으로, 2021년 5월 과학/공학 시리즈 쇼핑몰을 런칭했고 작은 성공을 경험했습니다.\\nㅤ\\n[Cultural Fit]\\n① 새로움을 마주할 수 있고 항상 배우는 사람 새로운 브랜드를 런칭하는 과정은 실험하고 확인하는 과학자의 정신과 닮아있습니다.긱블은 그 가운데서 오는 배움을 즐기며 자신의 성장을 함께 고민하는 회사입니다.\\n② 함께 일하는 동료의 중요성을 알고 상호간에 존중을 바탕으로 일하는 사람 우리는 '함께'이기 때문에 최대의 시너지가 나는 스타트업입니다. 오롯이 혼자 엄청난 능력을 쥐고만 있다면, 긱블이라는 곳에 유능한 분들이 모일 필요가 없겠지요!\\n③ 자신의 의견을 잘 말할 수 있고, 동료의 의견을 잘 듣는 사람 서로의 의견에 대한 충돌은 언제든 일어날 수 있습니다. 그 충돌을 통해 우리가 어떤 개선을 이루어냈는지가 중요합니다.\\n④ 불편함을 즐길 줄 아는 사람 긱블에서 불편함은 늘 즐거운 일입니다. 변화의 시작을 알리는 것이 바로 누군가가 찾아낸 불편함이기 때문입니다.\\n⑤ 쓸모없는 도전을 즐기는 사람 긱블은 쓸모없는 도전 속에서, 쓸모 있음을 찾아낼 줄 아는 사람들이 모인 곳입니다.",
          requirement: "2년 이상의 Front-End 개발 경력이 있으신 분 또는 그에 준하는 능력과 경험이 있으신 분\\n웹 서비스 아키택처에 대한 이해가 있으신 분\\nReact를 이용한 프론트엔드 개발 경험이 있으신 분\\nHTML/CSS/Javascript (ES6+) 및 웹 브라우저의 작동 방식에 대한 이해가 있으신 분\\n더 나은 코드를 작성하기 위한 노력과 자기 개발을 계속하시는 분\\n디자이너와 협업해서 퍼블리싱도 가능하신 분\\n남성의 경우 병역의 의무가 종료되었거나 없는 분",
          plus: "제로 베이스 개발(오래된 레거시 시스템 없음)을 선호하시는 분\\n서비스를 처음부터 참여하여 개발하고 런칭해 본 경험이 있으신 분\\n생산성 높은 프레임워크 및 신규 기술 도입에 거침이 없으신 분\\n독립적으로 일을 진행하며 임팩트 있는 결과물을 만들어 낼 수 있는 능력이 있으신 분",
          company_id: 4,
          created_at: new Date('2022-05-30 12:38:00'),
          updated_at: new Date('2022-05-30 12:38:00'),
        },
        {
          id: 6,
          title: 'Backend 개발자',
          career: '백엔드',
          content: "긱-하!\\n긱블은 누구든 재미있고 쉽게 과학-공학을 즐길 수 있는 콘텐츠를 만드는 과학/공학 미디어 스타트업입니다. 현재 34명의 동료와 약 88만 명의 구독자 분들과 함께 '과학/공학을 세상의 좋은 이야기로 만든다'라는 미션을 목표로 과학-공학의 매력을 널리 알리고 있습니다.  긱블은 영상 뿐만이 아닌 다양한 방법으로 과학/공학을 대중화시킬 수 있는 길을 찾고 있습니다. 그리고 그 도전의 일환으로, 2021년 5월 과학/공학 시리즈 쇼핑몰을 런칭했고 작은 성공을 경험했습니다.\\nㅤ\\n[Cultural Fit]\\n① 새로움을 마주할 수 있고 항상 배우는 사람 새로운 브랜드를 런칭하는 과정은 실험하고 확인하는 과학자의 정신과 닮아있습니다.긱블은 그 가운데서 오는 배움을 즐기며 자신의 성장을 함께 고민하는 회사입니다.\\n② 함께 일하는 동료의 중요성을 알고 상호간에 존중을 바탕으로 일하는 사람 우리는 '함께'이기 때문에 최대의 시너지가 나는 스타트업입니다. 오롯이 혼자 엄청난 능력을 쥐고만 있다면, 긱블이라는 곳에 유능한 분들이 모일 필요가 없겠지요!\\n③ 자신의 의견을 잘 말할 수 있고, 동료의 의견을 잘 듣는 사람 서로의 의견에 대한 충돌은 언제든 일어날 수 있습니다. 그 충돌을 통해 우리가 어떤 개선을 이루어냈는지가 중요합니다.\\n④ 불편함을 즐길 줄 아는 사람 긱블에서 불편함은 늘 즐거운 일입니다. 변화의 시작을 알리는 것이 바로 누군가가 찾아낸 불편함이기 때문입니다.\\n⑤ 쓸모없는 도전을 즐기는 사람 긱블은 쓸모없는 도전 속에서, 쓸모 있음을 찾아낼 줄 아는 사람들이 모인 곳입니다.",
          requirement: "3년 이상의 Back-End 개발 경력이 있으신 분 또는 그에 준하는 능력과 경험이 있으신 분\\n웹 서비스 아키택처에 대한 이해가 있으신 분\\nNodeJS, Django, Ruby on Rails등 생산성 높은 웹 프레임워크 경험이 있으신 분\\n더 나은 코드를 작성하기 위한 노력과 자기 개발을 계속하시는 분\\n남성의 경우 병역의 의무가 종료되었거나 없는 분",
          plus: "제로 베이스 개발(오래된 레거시 시스템 없음)을 선호하시는 분\\n서비스를 처음부터 참여하여 개발하고 런칭해 본 경험이 있으신 분\\n생산성 높은 프레임워크 및 신규 기술 도입에 거침이 없으신 분\\n독립적으로 일을 진행하며 임팩트 있는 결과물을 만들어 낼 수 있는 능력이 있으신 분",
          company_id: 4,
          created_at: new Date('2022-05-30 12:39:00'),
          updated_at: new Date('2022-05-30 12:39:00'),
        },
        {
          id: 7,
          title: '백엔드 개발자',
          career: '백엔드',
          content: "[백엔드 개발]\\n- 대출 심사/실행/상환 시스템 설계 및 개발\\n- 간편투자 시스템 설계 및 개발\\n- 자금흐름/정산 시스템 설계 및 개발\\n- 내부 운영업무 자동화",
          requirement: "개발 조직을 리드해본 경험을 보유하신 분\\n팀 구성원 및 협업 조직과의 원활한 커뮤니케이션이 가능하신 분\\n지속적으로 성장하고자 하는 마음가짐(Growth mindset)을 가지고 건강한 피드백을 주고받으며 함께 성장해 나가실 분\\nRDBMS에 대한 이해를 가지고 계신 분\\n테스트 코드 작성에 대한 이해가 있으신 분",
          plus: "'이렇게 해보는 것은 어떨까요?' 라는 질문을 던지며 함께 고민하며 서비스를 만들어 나가실 분\\n금융이라는 도메인을 이해하고 구현하는 것에 흥미를 가지고 계신 분\\nSpring framework 기반 백엔드 개발 경험이 있으신 분\\n컨테이너 환경에서의 제품 운영 경험이 있으신 분",
          company_id: 2,
          created_at: new Date('2022-05-30 12:39:03'),
          updated_at: new Date('2022-05-30 12:39:03'),
        },
        {
          id: 8,
          title: '안드로이드, iOS 개발 및 운영',
          career: '안드로이드, iOS',
          content: "저축은행 비대면 앱 서비스(안드로이드,iOS) 개발 및 운영",
          requirement: "안드로이드 또는 iOS 앱개발 2년 이상 ~ 7년 이하 경력자\\n(iOS : [objective-c], 안드로이드 : [java])\\n사용자 UI/UX에 대한 이해도와 관심을 보유하신 분\\n동료들과 소통하고 협력할 수 있으신 분\\n책임감있게 업무를 맡아 처리하는 분",
          plus: "금융기관 앱 개발업무 경력자\\n안드로이드, iOS  개발 가능한 분\\nGit 형상관리 사용 경험이 있거나, 사용에 능숙한 분\\nLua Script 사용 경험이 있거나, 사용에 능숙한 분\\n개발팀 문화 경험이 있고, 팀을 함께 만들어나가실 분",
          company_id: 3,
          created_at: new Date('2022-05-30 12:40:00'),
          updated_at: new Date('2022-05-30 12:40:00'),
        },
        {
          id: 9,
          title: 'Frontend Developer',
          career: '프론트엔드',
          content: "토스뱅크의 Frontend 챕터에는 현재 총 9명의 엔지니어가 함께하며, 서비스 개발을 넘어 역량적 성장을 함께해요. 토스뱅크는 서비스 단위의 스쿼드 조직으로 서비스/제품을 만들어요. 적게는 4명에서 많게는 15명의 멤버가 하나의 스쿼드를 이루어 작은 스타트업처럼 자율성을 갖고 일하고 있어요. 토스뱅크 Frontend 챕터는 하나의 팀처럼 협업하고 있어요. 주기적으로 챕터 위클리를 진행하여 기술부채를 청산해요. 또한 ‘LightningTalk’로 새로운 기술 토픽 또는 개발 노하우를 공유하거나, 개발경험 향상을 위한 안건들을 논의한답니다.",
          requirement: "개발 경력이 3년 이상이거나 3년에 준하는 역량을 가진 분을 찾아요.\\nReact, Vue, Angular 등 SPA 프레임워크 사용에 능숙하신 분이 좋아요.\\nHTML, CSS, JavaScript에 대한 이해가 깊은 분이 좋아요.\\nUI/UX에 대해 높은 가치를 두고 있는 분이 좋아요.\\nGit 등의 분산 버전 관리 시스템 이용에 능숙한 분이면 좋아요.\\nFrontend Operation 시스템(CI, CD 등)의 자동화, 편의성에 항상 관심을 가지고 발전시키고 싶은 분들과 함께하고 싶어요.",
          plus: "TypeScript, Flow를 이용한 JavaScript 정적 타입 분석 경험이 있는 분이면 좋아요.\\n서버 사이드 렌더링(SSR) 및 모바일 앱 내 웹앱 개발 경험이 있는 분이면 좋아요.\\n반응형 디자인, 웹 접근성, 웹 표준을 고려한 UI 개발 경험이 있는 분이면 좋아요.\\n테스트 및 배포 자동화 경험이 있는 분이면 좋아요.\\nWebpack 등 모듈 번들러를 능숙하게 사용하시는 분이면 좋아요.\\n사용자 경험에 대한 높은 이해도를 갖고, 문제를 해결하는 분과 함께하고 싶어요.",
          company_id: 5,
          created_at: new Date('2022-05-30 12:41:00'),
          updated_at: new Date('2022-05-30 12:41:00'),
        },
        {
          id: 10,
          title: 'Internal Product Developer',
          career: '프론트엔드, 백엔드',
          content: "Internal Product Developer (고객 상담 시스템)로 합류하시면 인터널 스쿼드에 배치됩니다. 토스뱅크는 서비스 단위의 메이커 조직을 스쿼드(Squad)라고 칭하고 있으며, PO/개발자/프로덕트 디자이너/데이터 분석가 등 적게는 4명에서 많게는 15명까지 하나의 스쿼드를 이루어 작은 스타트업처럼 자율성을 갖고 일하고 있어요. 인터널 스쿼드는 '대한민국 은행 시스템을 혁신한다.'는 목표를 갖고, 토스뱅크 팀원들의 업무 효율성을 높일 수 있는 시스템을 개발하기 위해 끊임없이 고민해요. 인터널 스쿼드는 인터널 제품의 속도와 퀄리티가 토스뱅크의 대고객에게 전달되는 가치의 수준을 결정한다는 자부심을 갖고 일해요.",
          requirement: "Java로 Spring Framework 기반의 서비스를 개발한 경험이 있는 분을 찾아요.\\nJSP, MyBatis를 활용해 웹서비스를 개발해보신 경험이 필요해요.\\nMySQL 또는 Oracle 같은 RDBMS 활용에 능숙하신 분을 찾아요.\\nHTTP, REST API, OAuth 프로토콜에 대한 이해가 있으신 분을 찾아요.\\nSVN, Git 과 같은 형상 관리 툴 사용에 익숙하신 분을 찾아요.\\nJavascript, jQuery 활용에 능숙하신 분을 찾아요.\\n외부시스템 EAI 연계 경험이 있으신 분을 찾아요.\\n업무 영역 확장에 의지가 강하신 분과 함께하고 싶어요.",
          plus: "Docker, Kubernetes 사용 경험이 있으면 더욱 환영해요.\\nMSA(Micro Service Architecture) 이해가 있는 분이면 더 좋아요.\\nRedis와 Kafka를 다뤄본 경험이 있다면 더 좋아요.\\nLinux, 대용량 SQL 활용에 능숙한 분이면 더 좋아요.",
          company_id: 5,
          created_at: new Date('2022-05-30 12:42:00'),
          updated_at: new Date('2022-05-30 12:42:00'),
        },
      ], {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};