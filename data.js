// ============================================================
// data.js - 数据挖掘复习网站完整数据
// ============================================================

// ─── 1. chapterData ──────────────────────────────────────────
const chapterData = [
  {
    title: '第一章 数据挖掘基础概论',
    subtitle: 'KDD流程、数据挖掘与OLAP/统计学区分、两大任务类型、数据分析8等级',
    content: `
      <h4>一、KDD与数据挖掘的关系</h4>
      <div class="highlight">
        <strong>核心考点：</strong>KDD是完整流程，数据挖掘是KDD中的核心步骤。
      </div>
      <ul>
        <li><strong>KDD（Knowledge Discovery in Databases，知识发现）：</strong>完整的流程，包括数据清洗、预处理、变换、挖掘、评价等全部环节。</li>
        <li><strong>数据挖掘（Data Mining）：</strong>KDD过程中的核心步骤，指使用算法从数据中发现模式的过程。</li>
      </ul>
      <div class="info-box">
        <strong>KDD全流程：</strong>数据清洗 → 数据预处理 → 数据变换 → 数据挖掘 → 模式评估 → 知识表示
      </div>

      <h4>二、数据挖掘与OLAP、统计学的概念区分</h4>
      <table class="compare-table">
        <tr><th>维度</th><th>数据挖掘</th><th>OLAP</th><th>统计学</th></tr>
        <tr><td>推理方式</td><td><strong>归纳推理</strong>——无需预设，计算机自动寻找模型</td><td><strong>演绎推理</strong>——用户提出假设，通过工具验证</td><td>基于概率论的传统分析方法</td></tr>
        <tr><td>数据规模</td><td>适合海量数据的自动分析</td><td>多维数据的聚合查询</td><td>传统上适合中小规模样本</td></tr>
        <tr><td>关系</td><td colspan="2">数据挖掘是OLAP的深化和自动化</td><td>数据挖掘是统计学的延伸和扩展</td></tr>
      </table>
      <div class="info-box">
        <strong>关键理解：</strong>数据挖掘不是为了替代统计学，而是其延伸和扩展，能更自动地分析不适合传统统计分析的海量数据。
      </div>

      <h4>三、数据分析 vs 数据挖掘的本质区别与联系</h4>
      <table class="compare-table">
        <tr><th>维度</th><th>数据分析（Data Analysis）</th><th>数据挖掘（Data Mining）</th></tr>
        <tr><td>定义</td><td>用适当的统计分析方法处理数据，提取有用信息形成结论</td><td>从大量的、不完全的、有噪声的、模糊的、随机的数据中，自动提取隐含的、未知的、潜在有用的信息和知识</td></tr>
        <tr><td>核心问题</td><td>回答"发生了什么？"和"为什么发生？"</td><td>回答"还会发生什么？"和"有哪些没发现的规律？"</td></tr>
        <tr><td>方法特点</td><td>基于已知指标进行总结和逻辑推导</td><td>靠算法模型寻找深层规律</td></tr>
        <tr><td>定位</td><td>基础（了解业务现状）</td><td>进阶（数据量极大时靠算法寻找规律）</td></tr>
      </table>

      <h4>四、数据挖掘的两大核心任务</h4>
      <div class="highlight">
        <strong>必考重点：</strong>区分预测任务和描述任务是数据挖掘的基本功。
      </div>
      <table class="compare-table">
        <tr><th>任务类型</th><th>核心目标</th><th>典型方法</th></tr>
        <tr><td><strong>预测任务（Predictive）</strong></td><td>根据某些属性（输入变量）的值，预测另一个特定属性（目标变量/因变量）在未来的值</td><td>分类（Classification）、回归（Regression）</td></tr>
        <tr><td><strong>描述任务（Descriptive）</strong></td><td>不需要预测特定目标变量，而是总结、概括或发现数据中潜在的模式、联系和规律（处理已有全局数据）</td><td>聚类（Clustering）、关联规则发现（Association Rule Discovery）、异常检测</td></tr>
      </table>

      <h4>五、数据分析能力的8个等级与两阶段</h4>
      <div class="info-box">
        <strong>两大阶段：</strong>描述阶段（传统分析，等级1-4）和 挖掘阶段（高级分析，等级5-8）。
      </div>
      <table class="compare-table">
        <tr><th>阶段</th><th>等级</th><th>能力名称</th><th>核心问题</th></tr>
        <tr><td rowspan="4"><strong>描述阶段</strong><br>（传统分析）</td><td>1</td><td>常规报表</td><td>发生什么事？</td></tr>
        <tr><td>2</td><td>即席查询</td><td>有多少数量、在哪里？</td></tr>
        <tr><td>3</td><td>多维分析/OLAP</td><td>问题到底出在哪里？（通过钻取层层剥笋）</td></tr>
        <tr><td>4</td><td>警报</td><td>什么时候该有所反应？</td></tr>
        <tr><td rowspan="4"><strong>挖掘阶段</strong><br>（高级分析）</td><td>5</td><td>统计分析</td><td>为什么出现这种情况？（寻找历史规律）</td></tr>
        <tr><td>6</td><td>预报</td><td>持续这种趋势，未来会怎么样？</td></tr>
        <tr><td>7</td><td>预测型建模</td><td>接下来会发生什么？（哪些客户会流失/响应）</td></tr>
        <tr><td>8</td><td>优化</td><td>如何把事情做得更好？（决策最优解）</td></tr>
      </table>
    `
  },
  {
    title: '第二章 数据挖掘过程模型',
    subtitle: 'CRISP-DM、SEMMA、5A三大过程模型、狭义与广义数据挖掘阶段',
    content: `
      <h4>一、三大主流数据挖掘过程模型对比</h4>
      <div class="highlight">
        <strong>核心考点：</strong>三大模型的提出者、步骤、核心特点是高频考点。
      </div>

      <h4>1. CRISP-DM模型（跨行业数据挖掘标准流程）</h4>
      <ul>
        <li><strong>提出者：</strong>跨行业组织（IBM等主流推动）</li>
        <li><strong>六大步骤：</strong>商业理解 → 数据理解 → 数据准备 → 建模 → 模型评估 → 结果发布</li>
        <li><strong>核心特点：</strong>业务驱动，循环往复。强调将"模糊的业务问题"转化为"标准的技术流程"，是最常用的企业大型项目模型。</li>
      </ul>
      <div class="info-box">
        <strong>关键词：</strong>业务驱动、循环迭代、最常用、企业级项目
      </div>

      <h4>2. SEMMA模型</h4>
      <ul>
        <li><strong>提出者：</strong>SAS Institute</li>
        <li><strong>五大步骤：</strong>数据抽样（Sample）→ 数据探索（Explore）→ 预处理/数据调整（Modify）→ 模型研发（Model）→ 知识解释评价（Assess）</li>
        <li><strong>核心特点：</strong>适用于需求明确、数据成熟的科研或算法开发场景。</li>
      </ul>
      <div class="info-box">
        <strong>关键词：</strong>SAS、技术导向、科研/算法开发
      </div>

      <h4>3. 5A模型</h4>
      <ul>
        <li><strong>提出者：</strong>SPSS公司</li>
        <li><strong>五大步骤：</strong>评价需求（Assess）→ 存取数据（Access）→ 完备分析（Analyze）→ 模型演示（Act）→ 结果展现（Automate）</li>
        <li><strong>核心特点：</strong>技术驱动，步骤严谨；结果驱动，强调落地，用于商业快速决策。</li>
      </ul>
      <div class="info-box">
        <strong>关键词：</strong>SPSS、技术驱动、结果导向、商业决策
      </div>

      <h4>二、三大过程模型对比总览</h4>
      <table class="compare-table">
        <tr><th>维度</th><th>CRISP-DM</th><th>SEMMA</th><th>5A</th></tr>
        <tr><td>提出者</td><td>跨行业组织（IBM等）</td><td>SAS Institute</td><td>SPSS公司</td></tr>
        <tr><td>步骤数</td><td>6步</td><td>5步</td><td>5步</td></tr>
        <tr><td>核心驱动</td><td>业务驱动</td><td>技术/数据导向</td><td>技术+结果驱动</td></tr>
        <tr><td>核心特点</td><td>循环往复，业务问题→技术流程</td><td>需求明确，数据成熟</td><td>步骤严谨，强调落地</td></tr>
        <tr><td>适用场景</td><td>企业大型项目（最常用）</td><td>科研或算法开发</td><td>商业快速决策</td></tr>
      </table>

      <h4>三、狭义与广义的数据挖掘三阶段</h4>
      <div class="highlight">
        <strong>重要区别：</strong>狭义聚焦技术过程，广义扩展到业务全生命周期。
      </div>
      <table class="compare-table">
        <tr><th>维度</th><th>狭义数据挖掘</th><th>广义数据挖掘</th></tr>
        <tr><td>三阶段</td><td>数据准备 → 数据挖掘 → 解释评估</td><td>问题理解 → 数据挖掘 → 辅助决策</td></tr>
        <tr><td>核心特点</td><td>数据准备往往占据大部分时间（含数据清洗、特征工程、变量选择）</td><td>涵盖面向问题解决的全生命周期</td></tr>
        <tr><td>面向对象</td><td>技术过程导向</td><td>组织管理、经营和商业优化</td></tr>
      </table>
      <div class="error-box">
        <strong>易错提醒：</strong>狭义数据挖掘三阶段中，数据准备是耗时最长的环节，而非挖掘本身。
      </div>
    `
  },
  {
    title: '第三章 数据准备与预处理',
    subtitle: '数据抽样、数据集成、异常值检测、数据变换、离散化与编码方法',
    content: `
      <h4>一、数据准备的地位与要求</h4>
      <div class="highlight">
        <strong>核心地位：</strong>数据的质量、表现形式和代表性对数据挖掘算法选择、参数选取和最终结果都起着<strong>决定性</strong>的作用。
      </div>
      <ul>
        <li><strong>高质量数据的四大要求：</strong>
          <ol>
            <li>完整的、一致的</li>
            <li>易于处理的、宜于运用数据挖掘算法的</li>
            <li>具有代表性的</li>
            <li>包含能够反映问题实质的特征数据</li>
          </ol>
        </li>
        <li><strong>主要环节：</strong>数据收集 → 数据抽样 → 数据集成 → 数据清理 → 数据规约 → 数据变换</li>
      </ul>

      <h4>二、数据收集的多样性</h4>
      <ul>
        <li><strong>定义：</strong>对项目所需数据进行甄别、认定并汇聚（存入数据仓库或建立分布式数据集）的过程。</li>
        <li><strong>数据源多样化：</strong>政务数据（人口、地理、户籍）、企事业数据（生产运营销售）、咨询公司数据、网络信息（非结构化数据）</li>
        <li><strong>获取手段：</strong>第三方共享、购买/受让、自行调查、网络爬取等，需综合平衡经济性、时效性、有效性</li>
      </ul>

      <h4>三、数据抽样</h4>
      <h4>1. 统计学与数据挖掘中"数据抽样"的本质差异</h4>
      <table class="compare-table">
        <tr><th>维度</th><th>统计学抽样</th><th>数据挖掘抽样</th></tr>
        <tr><td>抽样目的</td><td>因为<strong>获取</strong>全样本的资金和时间成本太高（如无法普查全国所有人）</td><td>因为<strong>处理</strong>全样本的计算成本（资金和时间）太高（数据体量、维度过大，算法跑不动）</td></tr>
      </table>

      <h4>2. 四种经典抽样方法对比</h4>
      <table class="compare-table">
        <tr><th>方法</th><th>核心原理</th><th>优缺点/注意事项</th></tr>
        <tr><td><strong>简单随机抽样</strong></td><td>完全随机。分为有放回（可能重复，多用于理论模拟）与无放回（不会重复，极常用于民调、质检等实际应用）</td><td>最基本方法，操作简单</td></tr>
        <tr><td><strong>系统抽样</strong></td><td>按一定顺序排列并等距离抽样</td><td>缺点：如果数据存在周期性模式，可能会导致样本偏差（消除了周期性特性）</td></tr>
        <tr><td><strong>分层抽样</strong></td><td>总体分为同质、互不交叉的层，在各层内独立抽样（分为等比例与不等比例抽样）</td><td>适用于层内同质、层间异质的总体</td></tr>
        <tr><td><strong>整群抽样</strong></td><td>总体分为群，随机抽取若干群，对抽中群内个体进行全调查</td><td>适用于群内异质、群间同质的总体</td></tr>
      </table>

      <h4>3. 分层抽样 vs 整群抽样（高频对比考点）</h4>
      <table class="compare-table">
        <tr><th>维度</th><th>分层抽样</th><th>整群抽样</th></tr>
        <tr><td>先做什么</td><td>先分层</td><td>先分群</td></tr>
        <tr><td>抽谁</td><td>每层都抽人</td><td>抽若干个群</td></tr>
        <tr><td>群内是否全调查</td><td>否</td><td>是</td></tr>
        <tr><td>目的</td><td>提高精度</td><td>降低成本</td></tr>
        <tr><td>层/群结构要求</td><td>层内同质、层间异质</td><td>群内异质、群间同质</td></tr>
        <tr><td>适用条件</td><td>层间异质性大、层内同质性强</td><td>群间差异小、群内各个体差异大</td></tr>
      </table>

      <h4>4. 数据抽样策略与原则</h4>
      <ul>
        <li><strong>渐进抽样/自适应抽样：</strong>当无法预先确定最优样本量时，从小抽样率样本开始，逐步增加样本容量，直到模型效果不再显著提升为止。需配合评估方法确定停止时机。</li>
        <li><strong>抽样原则：</strong>
          <ol>
            <li>抽取的数据应有代表性，有效抽样</li>
            <li>抽取感兴趣的内容</li>
            <li>保留原有特征</li>
          </ol>
        </li>
      </ul>

      <h4>四、数据集成</h4>
      <div class="info-box">
        <strong>定义：</strong>将不同来源、格式、特点性质的数据在逻辑上或物理上有机地集中，提供全面的数据共享。
      </div>
      <h4>1. 四大难点（核心考点）</h4>
      <ol>
        <li><strong>系统与数据异构：</strong>不同数据源在系统、模式（关系型、文本等）、定义、语义上存在差异</li>
        <li><strong>分布性与传输性：</strong>数据源异地分布，对网络传输的准确性、实时性、安全性要求高</li>
        <li><strong>自治性与松耦合：</strong>各数据源独立，可能自行调整数据结构而不通知集成系统，要求高鲁棒性</li>
        <li><strong>数据结构的不完整性与不关联性：</strong>存在数据缺失、主外键不统一等问题</li>
      </ol>

      <h4>2. 三种集成方式对比</h4>
      <table class="compare-table">
        <tr><th>维度</th><th>中间件（混合方式）</th><th>数据联邦（逻辑虚拟）</th><th>数据仓库（物理汇聚）</th></tr>
        <tr><td>数据存储</td><td>集成服务器上整合，对外提供接口</td><td>不实际保存数据，虚拟化视图</td><td>物理存储，复制/聚集数据</td></tr>
        <tr><td>实时性</td><td>较好</td><td>极好（直接查询实时源）</td><td>较差（受ETL周期限制）</td></tr>
        <tr><td>查询性能</td><td>中等</td><td>较低（现场计算，受限于源库）</td><td>查询极快（提前加工好）</td></tr>
        <tr><td>数据内容</td><td>原始数据+中间生成结果</td><td>仅源数据内容</td><td>可包含转换结果</td></tr>
        <tr><td>适用场景</td><td>系统多但不想动原有库，兼顾效率与实时性</td><td>数据源多且杂、实时性要求高、不能跨域传输</td><td>大规模历史趋势分析（OLAP）</td></tr>
      </table>

      <h4>3. 数据联邦详解</h4>
      <ul>
        <li><strong>定义：</strong>基于数据查询操作，从不同数据源完成数据汇集，构成虚拟化数据库的方法</li>
        <li><strong>核心特点：</strong>不实际保存/复制/迁移数据；只保存数据来源及连接信息；提供虚拟化集成视图</li>
        <li><strong>元数据：</strong>描述数据的数据——涉及技术属性、业务定义和操作特征</li>
        <li><strong>优点：</strong>应用方便、数据实时性好、开发快捷灵活</li>
        <li><strong>缺点：</strong>性能较低、系统可用性低（依赖源数据在线）、服务器负担大</li>
        <li><strong>联邦数据库系统（FDBS）：</strong>半自治多数据源联合体；紧密耦合（统一访问，扩展困难）vs 松耦合（统一语言访问，需解决语义异构）</li>
      </ul>

      <h4>4. 中间件详解</h4>
      <ul>
        <li><strong>定义：</strong>位于异构数据源系统（数据层）和应用程序（应用层）之间，提供统一数据模式和数据访问通用接口</li>
        <li><strong>核心功能：</strong>向下协调各数据源系统，向上为应用提供统一数据逻辑视图；隐藏底层数据细节</li>
        <li><strong>优势：</strong>灵活性极高、实时性好、适合处理逻辑复杂的连接</li>
        <li><strong>局限：</strong>开发难度大（每个源需开发适配器）、查询性能受限</li>
      </ul>

      <h4>五、异常值检测</h4>
      <div class="highlight">
        <strong>核心方法：拉依达准则（3&sigma;原则/&mu;&plusmn;3&sigma;）</strong>
      </div>
      <ul>
        <li><strong>适用条件：</strong>正态分布或近似正态分布的数据</li>
        <li><strong>计算逻辑：</strong>计算均值&mu;和标准差&sigma;，只要数据落在 [&mu;-3&sigma;, &mu;+3&sigma;] 区间之外，即判定为异常值</li>
        <li><strong>原理：</strong>在该区间外的概率仅为0.27%</li>
      </ul>

      <h4>六、数据变换</h4>
      <ul>
        <li><strong>定义：</strong>将数据变换成适合于数据挖掘的形式</li>
        <li><strong>核心目的：</strong>
          <ol>
            <li>从另一个角度、另一个域发现数据的更为显著的特征（如将语音数据变换为频率谱）</li>
            <li>提升数据处理算法的效率和效果</li>
          </ol>
        </li>
        <li><strong>常见方法：</strong>属性变换（变量变换）、离散化、主成分分析（PCA）、因子分析</li>
      </ul>

      <h4>1. 属性变换（变量变换）</h4>
      <table class="compare-table">
        <tr><th>方法</th><th>适用场景</th><th>核心特征</th><th>公式</th></tr>
        <tr><td><strong>归一化（Min-Max）</strong></td><td>图像处理、神经网络（需加快收敛）</td><td>将数据映射到[0,1]区间</td><td>x' = (x - min) / (max - min)</td></tr>
        <tr><td><strong>标准化（Z-Score）</strong></td><td>聚类、SVM、逻辑回归（大多数算法首选）</td><td>均值为0，标准差为1</td><td>z = (x - &mu;) / &sigma;</td></tr>
        <tr><td><strong>非线性变换</strong></td><td>处理偏态数据、非线性特征增强</td><td>改变数据分布形状</td><td>—</td></tr>
        <tr><td><strong>小数定标规范化</strong></td><td>简单规范化需求</td><td>移动小数点位置</td><td>x' = x / 10<sup>k</sup></td></tr>
      </table>

      <h4>2. 离散化（Discretization）</h4>
      <ul>
        <li><strong>定义：</strong>把连续的数字变成类别的过程（也叫分箱）。在取值区间中指定n-1个分割点，将数据划分为n个区间</li>
        <li><strong>为什么要离散化：</strong>
          <ol>
            <li>数据规约、维规约</li>
            <li>一些算法要求离散属性数据</li>
            <li>产生概念分层结构，可在不同抽象层进行挖掘</li>
            <li>消除奇异值带来的影响</li>
            <li>减少属性值个数，使结果知识表达更简洁、更易理解</li>
          </ol>
        </li>
        <li><strong>关键问题：</strong>选择多少个分割点？分割点位置如何确定？（数目由用户根据业务经验确定，位置可用非监督/监督方法确定）</li>
      </ul>

      <h4>3. 编码方法全面对比</h4>
      <table class="compare-table">
        <tr><th>编码方法</th><th>核心原理</th><th>通俗案例</th><th>核心优点</th><th>缺点/致命问题</th></tr>
        <tr><td><strong>标签编码（Label Encoding）</strong></td><td>每个类别随机映射为唯一整数（0,1,2...）</td><td>北京→0，上海→1，深圳→2</td><td>简单，不增加数据维度</td><td>引入虚假顺序关系！算法会误认为2>1>0</td></tr>
        <tr><td><strong>有序编码（Ordinal Encoding）</strong></td><td>专门用于有自然顺序的特征，按等级高低映射为递增数值</td><td>专科/S码→0，本科/M码→1，硕士/L码→2</td><td>数值大小有真实物理意义，完美反映等级关系</td><td>仅适用于有序特征，无法处理无顺序特征</td></tr>
        <tr><td><strong>独热编码（One-Hot Encoding）</strong></td><td>每个类别单独拆成一列，对应二元变量（0或1）</td><td>红:[1,0,0]，绿:[0,1,0]，蓝:[0,0,1]</td><td>各类别间保持完全相等的距离</td><td>维度爆炸！1万个类别→1万列</td></tr>
        <tr><td><strong>二进制编码（Binary Encoding）</strong></td><td>先分配整数序号，再转为二进制码存入不同列</td><td>序号3→二进制011，占3列</td><td>大幅压缩特征维度（1万类别只需14列）</td><td>编码的高低位失去业务可解释性</td></tr>
        <tr><td><strong>哈希编码（Hash Encoding）</strong></td><td>利用哈希函数将类别映射为固定长度的哈希值</td><td>Hash(ID) % 10，全部塞进10个固定列</td><td>空间复杂度极低，适合超大基数类别</td><td>存在哈希冲突（不同类别映射到同一槽位）</td></tr>
        <tr><td><strong>目标编码（Target Encoding）</strong></td><td>用该类别对应的目标变量（标签Y）的平均值进行编码</td><td>学区房平均房价8万→所有学区房替换为8.0</td><td>直接捕捉类别与目标之间的关联性</td><td>容易过拟合，样本少时均值严重失真</td></tr>
      </table>
    `
  },
  {
    title: '第四章 数据探索与统计分析',
    subtitle: '数据探索方法、可视化、集中量数、差异量数、相关性分析',
    content: `
      <h4>一、数据探索的作用与核心逻辑</h4>
      <div class="info-box">
        <strong>背景与定位：</strong>当面对一个全新领域、行业，或缺乏业务背景的数据时，需要首先通过数据探索，建立起必要的业务知识。
      </div>
      <ul>
        <li><strong>核心作用：</strong>初步了解数据的内容、性质、质量（评估完整性和一致性等），利用人的认知能力来识别数据的性质、模式和分布</li>
        <li><strong>关键价值：</strong>为后续选择合适的数据预处理工具和数据分析技术提供关键依据</li>
      </ul>

      <h4>二、数据探索的两大主要方法</h4>
      <table class="compare-table">
        <tr><th>方法</th><th>定义</th><th>优势</th></tr>
        <tr><td><strong>可视化（Visualization）</strong></td><td>将数据转化为可视的图或表格展现</td><td>人的大脑对图形化的数据模式认知能力，是任何纯数字化分析工具都无法比拟的</td></tr>
        <tr><td><strong>数据统计分析</strong></td><td>利用统计指标对数据流的分布特性进行定量描述</td><td>精确、可量化、可复现</td></tr>
      </table>

      <h4>三、可视化 vs 纯数据表现对比</h4>
      <table class="compare-table">
        <tr><th>作用</th><th>可视化表现</th><th>纯数据表现</th></tr>
        <tr><td>模式认知</td><td>形状、颜色和聚类立刻揭示数据结构（如相关性）</td><td>需复杂统计计算才能发现规律</td></tr>
        <tr><td>趋势评估</td><td>坡度陡峭程度直接反映增长或下降速度</td><td>必须对比前后数值，难以直观感受变化速率</td></tr>
        <tr><td>异常检测</td><td>远离群体的点非常"刺眼"，一眼可见</td><td>异常值淹没在大量数据中，极易被忽略</td></tr>
      </table>
      <div class="highlight">
        <strong>人类视觉优势：</strong>以视觉角度分析海量信息的能力，尤其在模式认知、变化趋势评估、异常值检测和异常模式识别上。
      </div>

      <h4>四、数据统计分析——集中量数</h4>
      <table class="compare-table">
        <tr><th>量数</th><th>定义</th><th>特点</th></tr>
        <tr><td><strong>频率</strong></td><td>某数值出现的次数/比例</td><td>基础描述统计</td></tr>
        <tr><td><strong>均值</strong></td><td>数据总和/数据个数</td><td>受极端值影响大；可用<strong>截断均值</strong>改善</td></tr>
        <tr><td><strong>中位数</strong></td><td>排序后中间位置的值</td><td>不受极端值影响</td></tr>
        <tr><td><strong>众数</strong></td><td>出现次数最多的值</td><td>不受极端值影响；可能不唯一或不存在；缺乏敏感性</td></tr>
        <tr><td><strong>百分位数</strong></td><td>有的数据小于该值；分组数据需用组下限计算</td><td>地位量数</td></tr>
      </table>
      <div class="info-box">
        <strong>截断均值：</strong>先把所有数据从小到大排序，然后去掉两头最高和最低的一定比例（如去掉最高5%和最低5%）的数据，只用中间剩下的"温和数据"来计算平均值。
      </div>

      <h4>五、数据统计分析——相关性量数</h4>
      <ul>
        <li><strong>协方差：</strong>衡量两个变量变化趋势的一致性（同向为正，反向为负）。方差是协方差的特例（同一变量）。</li>
        <li><strong>相关系数（Pearson）：</strong>衡量两个随机变量X、Y之间线性相关程度的指标，取值[-1, 1]；r=0.994表示高度线性正相关。</li>
        <li><strong>协方差矩阵：</strong>对称矩阵，对角线为方差，非对角线为协方差。</li>
        <li><strong>相关矩阵：</strong>第ij个元素是第i个和第j个属性之间的相关性，对角线为1。</li>
      </ul>
      <div class="highlight">
        <strong>协方差的物理意义：</strong>
        <ul>
          <li>若两个变量变化趋势一致（一个大于期望，另一个也大于期望），则协方差为正值</li>
          <li>若两个变量变化趋势相反，则协方差为负值</li>
          <li>当两个变量是同一个变量时，其协方差就是该变量的方差</li>
        </ul>
      </div>

      <h4>六、数据统计分析——差异量数</h4>
      <table class="compare-table">
        <tr><th>指标</th><th>定义</th><th>特点</th></tr>
        <tr><td><strong>极差/全距（Range）</strong></td><td>max - min</td><td>简单，但受极端值影响大，不能衡量每个数据变化</td></tr>
        <tr><td><strong>标准差</strong></td><td>方差的平方根</td><td>反映离散程度；受极端值影响</td></tr>
        <tr><td><strong>方差</strong></td><td>标准差的平方</td><td>最常用统计量；易被离群值扭曲</td></tr>
        <tr><td><strong>中位数绝对偏差（MAD）</strong></td><td>各数据与中位数绝对差的中位数</td><td>稳健，对异常值极度不敏感；可替代标准差</td></tr>
        <tr><td><strong>四分位差（IQR）</strong></td><td>Q3 - Q1 = P75 - P25</td><td>代表中间50%数据波动范围；抗异常值能力极强</td></tr>
      </table>
      <div class="error-box">
        <strong>MAD的异常值检测：</strong>若数据点与中位数距离超过 K&times;MAD（通常K=3），视为异常值。
      </div>
    `
  },
  {
    title: '第五章 关联规则挖掘',
    subtitle: '支持度、置信度、提升度、Apriori算法、FP-Growth算法、关联规则评估',
    content: `
      <h4>一、关联分析的定义与应用</h4>
      <ul>
        <li><strong>定义：</strong>在交易数据、关系数据或其他信息载体中，查找存在于项目集合或对象集合之间的频繁模式、关联、相关性或因果结构。</li>
        <li><strong>两种关联关系：</strong>
          <ul>
            <li><strong>简单关联关系：</strong>没有共同属性的事物组合，元素会较大概率同时出现（如面包和牛奶）</li>
            <li><strong>序列关联关系：</strong>事物在时间上以一定先后顺序发生（如买iPhone后买保护壳）</li>
          </ul>
        </li>
        <li><strong>典型应用：</strong>购物篮分析、国会投票记录分析、毒蘑菇特征发现、网站点击流挖掘、搜索引擎推荐</li>
      </ul>

      <h4>二、核心概念体系</h4>
      <table class="compare-table">
        <tr><th>概念</th><th>定义</th><th>公式/说明</th></tr>
        <tr><td><strong>项集（Itemset）</strong></td><td>包含0个或多个项的集合</td><td>I = {i&#8321;, i&#8322;, ..., i<sub>k</sub>}</td></tr>
        <tr><td><strong>k-项集</strong></td><td>包含k个项的项集</td><td>如{牛奶, 面包, 尿布}为3-项集</td></tr>
        <tr><td><strong>支持度计数 &sigma;(X)</strong></td><td>包含特定项集的事务个数</td><td>&sigma;(X) = |{t<sub>i</sub> | X &sube; t<sub>i</sub>, t<sub>i</sub> &isin; T}|</td></tr>
        <tr><td><strong>支持度 s(X)</strong></td><td>包含某项集的事务数与总事务数的比值</td><td>s(X) = &sigma;(X) / N</td></tr>
        <tr><td><strong>频繁项集</strong></td><td>满足支持度阈值（minSup）的所有项集</td><td>s(X) &ge; minSup</td></tr>
        <tr><td><strong>候选项集</strong></td><td>未经支持度检验的项集</td><td>—</td></tr>
        <tr><td><strong>置信度 c(X→Y)</strong></td><td>X出现时Y出现的条件概率</td><td>c(X→Y) = s(X&cup;Y) / s(X) = &sigma;(X&cup;Y) / &sigma;(X)</td></tr>
        <tr><td><strong>关联规则</strong></td><td>形如X→Y的蕴含表达式，X&cap;Y=&empty;</td><td>强度用支持度s和置信度c度量</td></tr>
      </table>

      <h4>三、两大核心评价指标</h4>
      <div class="highlight">
        <strong>必考计算题：</strong>支持度和置信度的计算是高频考点。
      </div>
      <ul>
        <li><strong>支持度（Support, s）：</strong>确定规则在多大程度上适用于整个数据集
          <br>公式：s(X→Y) = &sigma;(X&cup;Y) / N = P(X&cup;Y)</li>
        <li><strong>置信度（Confidence, c）：</strong>确定Y在包含X的事务中出现的频繁程度
          <br>公式：c(X→Y) = &sigma;(X&cup;Y) / &sigma;(X) = P(X&cup;Y) / P(X)</li>
        <li><strong>挖掘目标：</strong>发现满足最小支持度（minSup）和最小置信度（minConf）的<strong>强关联规则</strong></li>
      </ul>

      <h4>四、计算实例</h4>
      <div class="info-box">
        <strong>例题：</strong>某早点摊今天一共接待了10位顾客（N=10）。买了油条的有5人；买了豆浆的有7人；同时买了油条和豆浆的有4人。针对关联规则：{油条}→{豆浆}：
        <ul>
          <li><strong>支持度</strong> = 同时买油条和豆浆的人数 / 总人数 = 4/10 = <strong>40%（0.4）</strong></li>
          <li><strong>置信度</strong> = 同时买油条和豆浆的人数 / 买油条的总人数 = 4/5 = <strong>80%（0.8）</strong></li>
        </ul>
        <strong>理解要点：</strong>支持度看全局（全场10人中同时买两样的比例），置信度看局部/条件概率（已买油条的5人中顺便也买豆浆的比例）。
      </div>

      <h4>五、关联规则挖掘的两阶段框架</h4>
      <ol>
        <li><strong>产生频繁项集（Frequent Itemset Generation）：</strong>发现满足支持度阈值的所有项集
          <ul>
            <li>产生候选项集后确认：<strong>Apriori算法</strong></li>
            <li>不产生候选项集直接生成：<strong>FP-Growth算法</strong></li>
          </ul>
        </li>
        <li><strong>生成规则（Rule Generation）：</strong>从频繁项集中提取所有高置信度的规则（强规则）</li>
      </ol>

      <h4>六、Apriori算法</h4>
      <div class="highlight">
        <strong>核心原理：利用支持度单调性（先验原理）进行剪枝。</strong>
      </div>
      <ul>
        <li><strong>定理：</strong>如果一个项集是频繁的，则它的所有子集也一定是频繁的；反之，如果一个项集是非频繁的，则它的所有超集也一定是非频繁的</li>
        <li><strong>剪枝策略：</strong>借此剪掉无效的分支，大幅缩减搜索空间</li>
        <li><strong>局限：</strong>需要多次扫描数据库、产生海量候选集</li>
      </ul>

      <h4>七、FP-Growth算法</h4>
      <ul>
        <li><strong>核心思想：</strong>使用FP树（紧凑数据结构）组织数据，直接从该结构中提取频繁项集，不产生候选项集</li>
        <li><strong>FP树：</strong>输入数据的压缩表示，逐个读入事务并映射到FP树中的一条路径</li>
        <li><strong>构建步骤：</strong>
          <ol>
            <li>扫描数据集一次，确定每个项的支持度计数，丢弃非频繁项，频繁项按支持度递减排序</li>
            <li>扫描数据集二次，构建FP树（共享前缀路径，计数累加）</li>
          </ol>
        </li>
        <li><strong>提取频繁项集：</strong>以自底向上方式探索树，通过条件树递归挖掘</li>
      </ul>

      <h4>八、支持度-置信度框架的局限性</h4>
      <div class="error-box">
        <strong>虚假高置信度问题：</strong>假设超市里90%的人都会买大米。规则{避雷针}→{大米}的置信度可能高达90%，但避雷针和大米显然毫无关联。这个高置信度纯粹是因为大米本身是"超级热门商品"导致的。<br>
        <strong>解决方案：</strong>使用提升度和兴趣因子，剔除"由于后件本身超级热门而导致的虚假高置信度伪规则"。
      </div>

      <h4>九、关联规则评估——客观兴趣度度量</h4>
      <table class="compare-table">
        <tr><th>度量指标</th><th>判断标准</th></tr>
        <tr><td><strong>提升度（Lift）</strong></td><td>=1独立；&lt;1互斥（负相关）；&gt;1有效强关联；&gt;3认为有价值</td></tr>
        <tr><td><strong>杠杆率（Leverage）</strong></td><td>=0独立；越大关系越紧密；不受零事务影响</td></tr>
        <tr><td><strong>确信度（Conviction）</strong></td><td>=1独立；越大越关联；衡量规则预测错误的概率</td></tr>
        <tr><td><strong>兴趣因子（Interest Factor）</strong></td><td>=1独立；&lt;1负相关；&gt;1正相关；二元变量与Lift等价</td></tr>
      </table>
      <div class="info-box">
        <strong>核心理解：</strong>这些指标回答的是："买了X之后，究竟是促进了买Y（正相关），还是抑制了买Y（负相关），亦或是两者其实毫无瓜葛（相互独立）？"
      </div>
    `
  },
  {
    title: '第六章 分类预测',
    subtitle: '决策树、信息增益、Gini系数、贝叶斯分类、数据属性分类',
    content: `
      <h4>一、分类的定义与过程</h4>
      <ul>
        <li><strong>定义：</strong>分类就是"贴标签"，将数据对象映射到预定义的类别中</li>
        <li><strong>两大类型：</strong>
          <ul>
            <li><strong>描述性（Descriptive）：</strong>建立分类模型，理解数据内在结构</li>
            <li><strong>预测性（Predictive）：</strong>应用模型对未知数据进行预测</li>
          </ul>
        </li>
      </ul>
      <h4>分类过程的五大步骤</h4>
      <ol>
        <li><strong>选择训练数据集：</strong>训练样本需包含属性值和类别标记，形式为(V&#8321;, V&#8322;, ..., V<sub>n</sub>; C)，用于构建分类模型</li>
        <li><strong>选择测试数据集：</strong>用于评估模型准确率。可通过交叉验证（互换/轮换）选择最优模型</li>
        <li><strong>建立模型（训练）：</strong>由训练数据集生成分类模型</li>
        <li><strong>测试评估：</strong>使用测试数据集评估模型，根据误差进行修正（如剪枝）</li>
        <li><strong>应用模型：</strong>对未知分类的样本数据进行分类判别</li>
      </ol>

      <h4>二、决策树分类原理</h4>
      <ul>
        <li><strong>定义：</strong>利用决策树的原理和结构，构造分类模型，发现数据中蕴涵的分类规则</li>
        <li><strong>树结构：</strong>
          <ul>
            <li><strong>内部结点（非叶结点）：</strong>表示在一个属性上的测试</li>
            <li><strong>分枝：</strong>代表一个测试输出</li>
            <li><strong>叶结点：</strong>存放一个类标号</li>
          </ul>
        </li>
        <li><strong>分类方式：</strong>对未给定类标号的元组，跟踪从根结点到叶结点的路径，叶结点存放该元组的预测类别</li>
      </ul>

      <h4>三、数据属性的分类</h4>
      <table class="compare-table">
        <tr><th>大类</th><th>细分</th><th>特点</th><th>示例</th></tr>
        <tr><td rowspan="2"><strong>定量数据（Quantitative）</strong></td><td>连续型</td><td>可取区间内任意值，通过测量得到</td><td>身高、体重、温度、销售额</td></tr>
        <tr><td>离散型</td><td>只能取整数值，通过计数得到</td><td>企业个数、职工人数、设备台数</td></tr>
        <tr><td rowspan="2"><strong>定性数据（Qualitative）</strong></td><td>标称型/分类数据（Nominal）</td><td>类别间无顺序、无程度差异</td><td>性别、血型、药物反应</td></tr>
        <tr><td>有序型（Ordinal）</td><td>类别间有顺序/程度差异，但无固定间隔</td><td>成绩等级、满意度等级</td></tr>
      </table>

      <h4>四、不纯度度量与属性选择标准</h4>
      <div class="highlight">
        <strong>核心思想：</strong>划分后应使不纯度减小，即某一类占绝对优势。
      </div>

      <h4>预备概念：熵（Entropy）</h4>
      <ul>
        <li>熵用来度量"混乱程度"</li>
        <li>如果全是同一类 → 非常确定 → 熵 = 0</li>
        <li>如果两类各占一半 → 最不确定 → 熵 = 1</li>
        <li><strong>公式：</strong>熵 = -(p&#8321; &times; log&#8322;p&#8321; + p&#8322; &times; log&#8322;p&#8322; + ...)</li>
        <li><strong>举例：</strong>10个样本，5个买、5个不买 → 熵 = -(0.5&times;log&#8322;0.5 + 0.5&times;log&#8322;0.5) = 1</li>
      </ul>

      <h4>四种度量标准详解</h4>

      <h4>&emsp;1. 信息增益（InfoGain）</h4>
      <ul>
        <li><strong>思路：</strong>用某个属性划分后，熵降低了多少。降得越多越好</li>
        <li><strong>公式：</strong>信息增益 = 划分前的熵 - 划分后各分支的熵（加权平均）</li>
        <li><strong>举例：</strong>按"年龄"划分买电脑数据（14个样本，9买5不买，划分前熵=1）
          <br>青年分支（5人，2买3不买）：熵 &asymp; 0.97
          <br>中年分支（4人，全买）：熵 = 0
          <br>老年分支（5人，3买2不买）：熵 &asymp; 0.97
          <br>划分后加权熵 = (5/14)&times;0.97 + (4/14)&times;0 + (5/14)&times;0.97 &asymp; 0.69
          <br>信息增益 = 1 - 0.69 = <strong>0.31</strong></li>
        <li><strong>特点：</strong>好用，但偏向选择取值多的属性（如"身份证号"每人一个值，信息增益极大但无意义）</li>
      </ul>

      <h4>&emsp;2. 信息增益率（GainRatio）</h4>
      <ul>
        <li><strong>思路：</strong>在信息增益基础上，惩罚分支太多的属性</li>
        <li><strong>公式：</strong>增益率 = 信息增益 &divide; 分裂信息</li>
        <li><strong>分裂信息</strong> = 对"属性分了多少支"的惩罚项，分支越多数值越大</li>
        <li><strong>举例：</strong>上面"年龄"分了3支，分裂信息 &asymp; 1.58，增益率 = 0.31 &divide; 1.58 &asymp; <strong>0.20</strong></li>
        <li><strong>特点：</strong>修正了信息增益偏向多值属性的缺陷</li>
      </ul>

      <h4>&emsp;3. Gini系数</h4>
      <ul>
        <li><strong>思路：</strong>随机抽两个样本，它们属于不同类别的概率。这个概率越小越好</li>
        <li><strong>公式：</strong>Gini = 1 - (p<sub>A</sub>)&sup2; - (p<sub>B</sub>)&sup2; - ...</li>
        <li><strong>举例：</strong>10个样本，5买5不买 → Gini = 1 - 0.25 - 0.25 = <strong>0.5</strong>
          <br>9买1不买 → Gini = 1 - 0.81 - 0.01 = <strong>0.18</strong></li>
        <li><strong>特点：</strong>计算比熵快（不用算log），CART决策树在用</li>
      </ul>

      <h4>&emsp;4. 分类误差</h4>
      <ul>
        <li><strong>思路：</strong>看哪类占比最大，错误率就是1减去这个占比</li>
        <li><strong>公式：</strong>分类误差 = 1 - 占比最大的类别的概率</li>
        <li><strong>举例：</strong>5买5不买 → 误差 = 1 - 0.5 = <strong>0.5</strong>；9买1不买 → 误差 = 1 - 0.9 = <strong>0.1</strong></li>
        <li><strong>特点：</strong>简单直观，但对不纯度的变化不够敏感</li>
      </ul>

      <h4>四种度量标准总结对比</h4>
      <table class="compare-table">
        <tr><th>度量标准</th><th>一句话概括</th><th>选择标准</th></tr>
        <tr><td>信息增益</td><td>划分后混乱度降了多少</td><td>越大越好</td></tr>
        <tr><td>信息增益率</td><td>降混乱度的同时扣掉分支太多的罚分</td><td>越大越好</td></tr>
        <tr><td>Gini系数</td><td>随机抽两个是不同类别的概率</td><td>越小越好</td></tr>
        <tr><td>分类误差</td><td>猜错的比例</td><td>越小越好</td></tr>
      </table>

      <h4>五、贝叶斯分类</h4>
      <table class="compare-table">
        <tr><th>概念</th><th>解释</th></tr>
        <tr><td><strong>先验概率 P(C)</strong></td><td>不看任何特征时，某类出现的概率</td></tr>
        <tr><td><strong>似然 P(X|C)</strong></td><td>某类中，出现这些特征的概率</td></tr>
        <tr><td><strong>后验概率 P(C|X)</strong></td><td>看到特征后，某类出现的概率</td></tr>
        <tr><td><strong>朴素贝叶斯</strong></td><td>假设所有特征互相独立（简化计算）</td></tr>
      </table>

      <h4>核心公式</h4>
      <ul>
        <li><strong>贝叶斯定理：</strong>P(C|X) = P(X|C) &times; P(C) / P(X)</li>
        <li><strong>分类决策：</strong>只比较分子，分母相同可忽略 → P(C|X) &prop; P(X|C) &times; P(C)</li>
        <li><strong>朴素贝叶斯独立性假设：</strong>P(X|C) = P(X&#8321;|C) &times; P(X&#8322;|C) &times; ... &times; P(X<sub>n</sub>|C)</li>
        <li><strong>分类器选择后验概率最大的类别：</strong>&Ccirc; = argmax<sub>C</sub> P(C) &times; &prod; P(X<sub>i</sub>|C)</li>
      </ul>

      <h4>贝叶斯分类器优缺点</h4>
      <table class="compare-table">
        <tr><th>优点</th><th>缺点</th></tr>
        <tr><td>计算快，规则简单</td><td>要求特征独立性假设</td></tr>
        <tr><td>对噪声鲁棒</td><td>属性相关时会降低效果</td></tr>
        <tr><td>容易处理缺失值</td><td>需要概率数据</td></tr>
        <tr><td>理论上错误率最小</td><td>实践中不一定最优（独立性假设往往不成立）</td></tr>
      </table>
    `
  },
  {
    title: '第七章 聚类分析',
    subtitle: 'K-Means、K-Medoids、距离度量、SSE、聚类分类体系',
    content: `
      <h4>一、聚类分析的定义与核心思想</h4>
      <ul>
        <li><strong>定义：</strong>将物理或抽象对象的集合划分成为由类似的对象组成的多个属类的过程</li>
        <li><strong>核心思想：</strong>"物以类聚，人以群分"——将判定为较为相近和相似的对象聚集为自相似的组群，构成不同的簇</li>
        <li><strong>优化目标：</strong>簇间最大化（簇与簇之间差异大）、簇内最小化（簇内对象相似度高）</li>
      </ul>

      <h4>二、聚类与分类的核心区别</h4>
      <table class="compare-table">
        <tr><th>维度</th><th>分类（Classification）</th><th>聚类（Clustering）</th></tr>
        <tr><td>是否有标签</td><td>有，训练数据带正确答案</td><td>没有，数据"裸奔"</td></tr>
        <tr><td>学习方式</td><td>有监督学习（Supervised）</td><td>无监督学习（Unsupervised）</td></tr>
        <tr><td>过程比喻</td><td>有老师教，学完考试</td><td>自学成才，自己摸索规律</td></tr>
        <tr><td>输入</td><td>带标签的数据</td><td>原始数据</td></tr>
        <tr><td>输出</td><td>预测新数据的类别</td><td>发现数据中自然的分组</td></tr>
        <tr><td>典型算法</td><td>决策树、SVM、神经网络</td><td>K-Means、层次聚类、DBSCAN</td></tr>
        <tr><td>应用场景</td><td>垃圾邮件识别、疾病诊断</td><td>客户分群、基因分类、文档聚类</td></tr>
      </table>

      <h4>三、聚类算法分类体系</h4>
      <table class="compare-table">
        <tr><th>分类维度</th><th>类型</th><th>代表算法/说明</th></tr>
        <tr><td rowspan="4"><strong>按分类方法</strong></td><td>划分聚类</td><td>K-Means、K-medoids</td></tr>
        <tr><td>层次聚类</td><td>CURE、ROCK、BIRCH</td></tr>
        <tr><td>基于密度的聚类</td><td>DBSCAN</td></tr>
        <tr><td>基于网络的聚类</td><td>WaveCluster</td></tr>
        <tr><td rowspan="3"><strong>按划分方法</strong></td><td>互斥聚类</td><td>每个对象只属于一个簇</td></tr>
        <tr><td>非互斥聚类</td><td>对象可属于多个簇</td></tr>
        <tr><td>模糊聚类</td><td>对象以一定概率属于各簇</td></tr>
        <tr><td rowspan="2"><strong>按划分范围</strong></td><td>完全聚类</td><td>所有对象都被分配</td></tr>
        <tr><td>部分聚类</td><td>部分对象可能不被分配</td></tr>
      </table>

      <h4>四、距离度量与相似性度量</h4>
      <table class="compare-table">
        <tr><th>度量方法</th><th>公式/定义</th><th>适用场景</th></tr>
        <tr><td><strong>欧几里得距离</strong></td><td>d = &radic;(&sum;(x<sub>i</sub> - y<sub>i</sub>)&sup2;)</td><td>连续数值数据，二维/三维空间中的实际距离</td></tr>
        <tr><td><strong>曼哈顿距离</strong></td><td>d = &sum;|x<sub>i</sub> - y<sub>i</sub>|</td><td>网格状路径、城市街区距离</td></tr>
        <tr><td><strong>余弦相似度</strong></td><td>cos(x,y) = (x&middot;y) / (||x|| &times; ||y||)</td><td>文本相似度、高维稀疏数据（如TF-IDF向量）</td></tr>
        <tr><td><strong>相关系数</strong></td><td>&rho;<sub>xy</sub> = &sum;(x<sub>i</sub>-x&#772;)(y<sub>i</sub>-y&#772;) / &radic;(&sum;(x<sub>i</sub>-x&#772;)&sup2; &sum;(y<sub>i</sub>-y&#772;)&sup2;)</td><td>衡量变量间相关关系密切程度</td></tr>
      </table>

      <h4>三种距离的核心理解</h4>
      <div class="info-box">
        <ul>
          <li><strong>欧几里得距离（几何视角）：</strong>空间中两点之间实打实的最短"直线距离"。在数据挖掘中，是连续数值型数据（如身高、收入、温度）最天然、最常用的距离定义。</li>
          <li><strong>曼哈顿距离（规则拓扑视角）：</strong>不能走直线，只能沿着"横平竖直"的轴向线段相加得到的总长度。如出租车在网格状城市街道中行驶，无法穿墙，必须绕格子走。</li>
          <li><strong>余弦相似度（方向与偏好视角）：</strong>完全忽略向量的绝对长度，只盯着两个向量在空间中的"夹角大小"。衡量"步调与结构是否一致"。哪怕文章A有1万字，文章B只有100字，只要高频词出现比例方向一致，余弦值就接近1。是文本查重、文章分类、推荐系统的核心指标。</li>
        </ul>
      </div>

      <h4>五、误差平方和（SSE）</h4>
      <ul>
        <li><strong>定义：</strong>衡量聚类质量的指标，SSE = &sum;&sum;(x - c<sub>i</sub>)&sup2;（对每个簇中每个点到质心的距离平方求和）</li>
        <li><strong>性质：</strong>SSE越小，质心是簇中点的更好代表</li>
        <li><strong>最优条件：</strong>使用欧氏距离时，唯一选择均值作为质心，才能使SSE达到理论最小值</li>
      </ul>

      <h4>六、K-Means算法（核心算法）</h4>
      <div class="highlight">
        <strong>基本思想：</strong>给定n个数据元素的数据集，构造k个分组（k&lt;n），每个分组为一个簇。
      </div>
      <ul>
        <li><strong>满足条件：</strong>
          <ol>
            <li>每个分组至少包含一个数据元素</li>
            <li>每个数据元素属于且仅属于一个分组</li>
          </ol>
        </li>
      </ul>
      <h4>算法步骤</h4>
      <ol>
        <li>选择k个点作为初始质心</li>
        <li>将每个点指派到最近的质心，形成k个簇</li>
        <li>重新计算每个簇的质心（均值）</li>
        <li>重复步骤2-3，直到终止条件满足</li>
      </ol>
      <h4>迭代终止条件</h4>
      <ul>
        <li>质心不再变化</li>
        <li>SSE不再变优</li>
        <li>质心变化距离 &lt; &epsilon;</li>
        <li>达到最大迭代次数</li>
      </ul>

      <h4>七、K-Means三大经典挑战</h4>
      <table class="compare-table">
        <tr><th>挑战</th><th>问题描述</th><th>解决方案</th></tr>
        <tr><td><strong>挑战一：K值难以预设</strong></td><td>必须在运行前人工指定K值，在无标签数据中无法预知最优分类数</td><td>结合业务实际需求决定，避免纯数学计算与业务脱节</td></tr>
        <tr><td><strong>挑战二：初始质心随机性</strong></td><td>随机选择初始中心，易陷入局部最优，同一批数据运行两次结果可能完全不同</td><td>K-Means++思想：后续初始质心倾向于选择离已有质心距离较远的点；多次运行取最优（选总体SSE最小的）</td></tr>
        <tr><td><strong>挑战三：对异常值极度敏感</strong></td><td>使用算术平均值更新中心，均值对极端值非常脆弱，质心会被"拉跑""带偏"</td><td>严格的前置数据清洗：利用3&sigma;原则提前识别并过滤异常值</td></tr>
      </table>

      <h4>八、初始质心选择方法</h4>
      <table class="compare-table">
        <tr><th>方法</th><th>说明</th><th>特点</th></tr>
        <tr><td>随机选择</td><td>随机指定k个点</td><td>简单，但簇质量常常不高</td></tr>
        <tr><td>最小SSE法</td><td>多次运行，选最小SSE的簇集</td><td>计算量大</td></tr>
        <tr><td>层次聚类法</td><td>先用层次聚类提取k个簇的质心</td><td>有效但开销大，仅适合小样本</td></tr>
        <tr><td>离散质心法</td><td>选离已选质心最远的点</td><td>质心散开，但可能选中离群点，开销大</td></tr>
      </table>

      <h4>九、K-Means的特点与局限</h4>
      <table class="compare-table">
        <tr><th>特点/局限</th><th>说明</th></tr>
        <tr><td>对k值敏感</td><td>事先判断簇的划分个数非常困难，往往带有很大随意性</td></tr>
        <tr><td>对离群点、噪声敏感</td><td>离群点会导致SSE高，质心代表性变差，簇质心偏移</td></tr>
        <tr><td>不能处理非球形簇</td><td>假设簇是凸形的，对复杂形状簇效果差</td></tr>
        <tr><td>不能处理不同尺寸的簇</td><td>大簇可能吞并小簇</td></tr>
        <tr><td>不能处理不同密度的簇</td><td>密度差异大时聚类效果差</td></tr>
        <tr><td>计算开销大</td><td>需迭代进行邻近度计算，数据量大时时间开销大</td></tr>
        <tr><td>算法简单，易于理解</td><td>二分K-Means等变种不受初始化问题影响</td></tr>
      </table>

      <h4>十、K-Medoids算法（K-Means的改进）</h4>
      <table class="compare-table">
        <tr><th>维度</th><th>K-Means</th><th>K-Medoids</th></tr>
        <tr><td>质心计算</td><td>均值（mean）</td><td>从样本点中选取（中心点/medoid）</td></tr>
        <tr><td>对噪声敏感性</td><td>敏感</td><td>不敏感（改善了对噪声的问题）</td></tr>
        <tr><td>紧凑度度量</td><td>SSE（误差平方和）</td><td>绝对误差和</td></tr>
        <tr><td>时间复杂度</td><td>较低</td><td>较高（需遍历样本点找最优中心点）</td></tr>
        <tr><td>核心思想</td><td>每次迭代重新计算均值质心</td><td>每次迭代从样本中选使绝对误差和最小的点作为新质心</td></tr>
      </table>
      <div class="info-box">
        <strong>K-Medoids优势：</strong>改善了K-Means对噪声点敏感的问题，因为中心点必须是实际样本点，不受极端值影响。
      </div>
    `
  },
  {
    title: '第八章 模型评价与综合应用',
    subtitle: '模型评价方法、过拟合处理、综合简答与论述',
    content: `
      <h4>一、分类模型评价指标</h4>
      <div class="highlight">
        <strong>核心考点：</strong>混淆矩阵是所有分类评价指标的基础。
      </div>

      <h4>1. 混淆矩阵（Confusion Matrix）</h4>
      <table class="compare-table">
        <tr><th></th><th>预测为正类</th><th>预测为负类</th></tr>
        <tr><td><strong>实际为正类</strong></td><td>TP（真正例）</td><td>FN（假反例）</td></tr>
        <tr><td><strong>实际为负类</strong></td><td>FP（假正例）</td><td>TN（真反例）</td></tr>
      </table>

      <h4>2. 核心评价指标</h4>
      <table class="compare-table">
        <tr><th>指标</th><th>公式</th><th>含义</th></tr>
        <tr><td><strong>准确率（Accuracy）</strong></td><td>(TP + TN) / (TP + TN + FP + FN)</td><td>所有预测中正确的比例</td></tr>
        <tr><td><strong>精确率（Precision）</strong></td><td>TP / (TP + FP)</td><td>预测为正的样本中，实际为正的比例（查准率）</td></tr>
        <tr><td><strong>召回率（Recall）</strong></td><td>TP / (TP + FN)</td><td>实际为正的样本中，被正确预测的比例（查全率）</td></tr>
        <tr><td><strong>F1值</strong></td><td>2 &times; Precision &times; Recall / (Precision + Recall)</td><td>精确率和召回率的调和平均数</td></tr>
      </table>
      <div class="info-box">
        <strong>理解要点：</strong>
        <ul>
          <li>精确率高、召回率低 → 预测很谨慎，预测为正的确实大多是对的，但漏掉了很多真正例</li>
          <li>精确率低、召回率高 → 预测很激进，大部分正例都找到了，但也混入了很多误判</li>
          <li>F1值越高，说明模型在精确率和召回率之间取得了更好的平衡</li>
        </ul>
      </div>

      <h4>3. ROC曲线与AUC值</h4>
      <ul>
        <li><strong>ROC曲线（Receiver Operating Characteristic）：</strong>以假正例率（FPR = FP/(FP+TN)）为横轴，真正例率（TPR = TP/(TP+FN)，即召回率）为纵轴绘制的曲线</li>
        <li><strong>AUC（Area Under Curve）：</strong>ROC曲线下方的面积
          <ul>
            <li>AUC = 1：完美分类器</li>
            <li>AUC = 0.5：随机猜测（对角线）</li>
            <li>AUC越接近1，模型区分能力越强</li>
          </ul>
        </li>
      </ul>

      <h4>二、回归模型评价指标</h4>
      <table class="compare-table">
        <tr><th>指标</th><th>公式</th><th>含义与特点</th></tr>
        <tr><td><strong>MSE（均方误差）</strong></td><td>(1/n) &times; &sum;(y<sub>i</sub> - y&#770;<sub>i</sub>)&sup2;</td><td>预测值与真实值差值的平方平均；对大误差惩罚重</td></tr>
        <tr><td><strong>RMSE（均方根误差）</strong></td><td>&radic;MSE</td><td>与MSE同义但量纲与原数据一致，更易解释</td></tr>
        <tr><td><strong>MAE（平均绝对误差）</strong></td><td>(1/n) &times; &sum;|y<sub>i</sub> - y&#770;<sub>i</sub>|</td><td>预测值与真实值差值的绝对值平均；对异常值鲁棒</td></tr>
        <tr><td><strong>R&sup2;（决定系数）</strong></td><td>1 - SS<sub>res</sub>/SS<sub>tot</sub></td><td>模型解释的方差占总方差的比例；越接近1越好</td></tr>
      </table>

      <h4>三、过拟合与欠拟合</h4>
      <div class="highlight">
        <strong>核心概念：</strong>过拟合和欠拟合是模型评价中最重要的辩证关系。
      </div>
      <table class="compare-table">
        <tr><th>维度</th><th>过拟合（Overfitting）</th><th>欠拟合（Underfitting）</th></tr>
        <tr><td><strong>定义</strong></td><td>模型在训练数据上表现极好，但在新数据上表现差</td><td>模型在训练数据上就表现不好，无法捕捉数据中的规律</td></tr>
        <tr><td><strong>表现</strong></td><td>训练误差很低（甚至为0），但检验误差很高</td><td>训练误差和检验误差都很高</td></tr>
        <tr><td><strong>原因</strong></td><td>模型过于复杂；噪声导致决策边界改变；缺乏代表性样本时根据少量记录做决策</td><td>模型过于简单；特征不足；训练时间不够</td></tr>
        <tr><td><strong>处理方法</strong></td><td>剪枝（决策树）、正则化、交叉验证、增加训练数据、降低模型复杂度</td><td>增加模型复杂度、增加特征、减少正则化</td></tr>
      </table>

      <h4>四、决策树剪枝（防止过拟合）</h4>
      <table class="compare-table">
        <tr><th>类型</th><th>原理</th><th>特点</th></tr>
        <tr><td><strong>先剪枝（预剪枝）</strong></td><td>在树生长过程中提前停止（如限制最大深度、最小样本数、最小信息增益）</td><td>速度快，但可能剪枝过早（underfitting风险）</td></tr>
        <tr><td><strong>后剪枝</strong></td><td>先让树完整生长，再修剪不必要的分支（如用验证集评估每个子树是否应该被替换为叶节点）</td><td>效果好但计算量大</td></tr>
      </table>
      <div class="error-box">
        <strong>过拟合原因深度分析：</strong>
        <ul>
          <li><strong>噪声：</strong>噪声导致决策边界改变，模型把噪声也当作规律来学习</li>
          <li><strong>缺乏代表性样本：</strong>根据少量训练记录做出决策，无法反映整体分布</li>
        </ul>
      </div>

      <h4>五、经典简答题一：数据挖掘中哪个环节最为重要？</h4>
      <div class="info-box">
        <strong>参考答案：数据准备（Data Preparation）/ 数据预处理最为重要。</strong>
      </div>
      <ol>
        <li><strong>决定性地位：</strong>数据的质量、表现形式和代表性对数据挖掘算法选择、参数选取和最终结果起着决定性的作用——"垃圾进，垃圾出"（Garbage In, Garbage Out）。</li>
        <li><strong>耗时最长：</strong>狭义数据挖掘三阶段（数据准备、数据挖掘、解释评估）中，数据准备往往占据大部分时间，包含数据清洗、特征工程、变量选择等。</li>
        <li><strong>三大主流过程模型都离不开数据准备：</strong>
          <ul>
            <li>CRISP-DM：商业理解 → 数据理解 → <strong>数据准备</strong> → 建模 → 评估 → 发布</li>
            <li>SEMMA：<strong>抽样(Sample)</strong> → 探索 → <strong>预处理(Modify)</strong> → 建模 → 评估</li>
            <li>5A：评估 → <strong>存取数据(Access)</strong> → 分析 → 演示 → 展现</li>
            <li>无论哪个模型，数据准备都是建模前不可或缺的必经环节。</li>
          </ul>
        </li>
        <li><strong>KDD流程的第一道实质性工序：</strong>KDD = 数据清洗 → 预处理 → 变换 → 挖掘 → 评价。数据挖掘只是KDD中的一个核心步骤，而数据清洗和预处理是整个知识发现流程的起点和基础。</li>
        <li><strong>所有挖掘任务都依赖数据准备：</strong>
          <ul>
            <li>分类/回归 → 需要干净、一致、无噪声的训练集</li>
            <li>聚类 → 需要剔除异常值（否则质心会被极端值"拉偏"）</li>
            <li>关联规则 → 交易数据中的重复、缺失、噪声都会产生虚假规则</li>
          </ul>
        </li>
        <li><strong>数据准备贯穿数据质量管理全流程：</strong>从数据收集 → 抽样 → 集成（解决异构/分布问题）→ 清理（3&sigma;异常检测）→ 规约 → 变换（归一化/标准化），每一环都在将原始"脏数据"转化为算法能理解的"干净数据"。</li>
      </ol>

      <h4>六、经典简答题二：数据预处理的地位与作用</h4>
      <div class="info-box">
        <strong>题目：</strong>数据预处理是数据准备的主要工作，请思考和阐述数据预处理在数据挖掘中所处的地位和所发挥的作用。
      </div>

      <h4>（一）所处的地位：基础性与决定性地位</h4>
      <ol>
        <li><strong>流程基石地位：</strong>在KDD全流程中，数据预处理是最前端的环节，后续的数据挖掘、模式评估、知识表示都建立在预处理后的数据之上。没有高质量的数据预处理，数据挖掘无从谈起。</li>
        <li><strong>耗时核心地位：</strong>在狭义数据挖掘三阶段中，数据准备（含数据预处理）往往占据整个项目的大部分时间，说明其在实践中是最消耗资源和精力的环节。</li>
        <li><strong>决定性地位：</strong>数据的质量、表现形式和代表性对数据挖掘算法选择、参数选取和最终结果起着决定性的作用。如果数据预处理不到位，无论后续算法多先进，都会出现"垃圾进，垃圾出"的结果。</li>
      </ol>

      <h4>（二）所发挥的作用</h4>
      <ol>
        <li><strong>保证数据质量：</strong>通过数据清理（如异常值检测与剔除——3&sigma;原则）、数据集成（解决异构、分布式问题）、填补缺失值等手段，确保数据满足完整、一致、易于处理、具有代表性四大要求。</li>
        <li><strong>适配算法需求：</strong>通过数据变换（归一化映射到[0,1]、标准化使均值为0标准差为1、非线性变换改变数据分布形状）将数据转换为适合特定算法的形式，满足不同算法的输入要求（如神经网络需[0,1]区间，聚类、SVM等需零均值标准化）。</li>
        <li><strong>提升算法效率与效果：</strong>
          <ul>
            <li>离散化可消除奇异值影响，减少属性值个数，使结果更简洁易理解</li>
            <li>属性变换可提升数据处理算法的效率和效果</li>
            <li>数据抽样可降低计算成本，使算法能够处理大规模数据</li>
          </ul>
        </li>
        <li><strong>发现数据深层特征：</strong>通过数据变换可以从另一个角度、另一个域发现数据更为显著的特征，如将语音数据变换为频率谱。</li>
        <li><strong>为后续步骤提供关键依据：</strong>数据探索（数据预处理的前期工作）可初步了解数据的内容、性质、质量，为后续选择合适的数据预处理工具和数据分析技术提供关键依据。</li>
      </ol>
    `
  }
];

// ─── 2. chapterQuizzes ───────────────────────────────────────
const chapterQuizzes = [
  {
    title: '第1章测试',
    questions: [
      { type: 'choice', question: 'KDD（知识发现）与数据挖掘的关系是？', options: ['KDD是数据挖掘的一个步骤', '数据挖掘是KDD过程中的核心步骤', 'KDD与数据挖掘是完全相同的概念', '数据挖掘包含KDD的全部流程'], answer: 'B', focus: 'KDD与数据挖掘的关系', explanation: 'KDD是完整的知识发现流程，包括数据清洗、预处理、变换、挖掘、评价等步骤；数据挖掘只是KDD过程中的核心步骤，指使用算法从数据中发现模式的过程。' },
      { type: 'choice', question: '数据挖掘与OLAP的核心区别在于？', options: ['数据挖掘使用统计方法，OLAP不使用', 'OLAP处理大数据，数据挖掘处理小数据', 'OLAP是演绎推理，数据挖掘是归纳推理', '两者没有本质区别'], answer: 'C', focus: '数据挖掘与OLAP的区别', explanation: 'OLAP是演绎推理——用户提出假设，通过工具验证；数据挖掘是归纳推理——无需预设假设，计算机自动寻找模型和规律。' },
      { type: 'choice', question: '以下哪项属于数据挖掘的预测任务？', options: ['聚类分析', '关联规则发现', '分类与回归', '异常检测'], answer: 'C', focus: '数据挖掘任务分类', explanation: '预测任务包括分类（Classification）和回归（Regression），目标是根据输入变量预测目标变量的值。聚类、关联规则和异常检测属于描述任务。' },
      { type: 'choice', question: '数据分析能力的8个等级中，"多维分析/OLAP"属于第几级？', options: ['第1级', '第2级', '第3级', '第4级'], answer: 'C', focus: '数据分析能力8等级', explanation: '8个等级中，第3级是多维分析/OLAP，用于通过钻取层层剥笋来定位问题到底出在哪里。第1级是常规报表，第2级是即席查询，第4级是警报。' },
      { type: 'choice', question: 'CRISP-DM模型的第一步是？', options: ['数据理解', '商业理解', '数据准备', '建模'], answer: 'B', focus: 'CRISP-DM流程', explanation: 'CRISP-DM（跨行业数据挖掘标准流程）的六大步骤依次为：商业理解→数据理解→数据准备→建模→模型评估→结果发布。第一步是商业理解。' },
      { type: 'choice', question: '数据分析与数据挖掘的关系描述正确的是？', options: ['数据挖掘是数据分析的基础', '数据分析是基础，数据挖掘是进阶', '两者互不相关', '数据挖掘可以完全替代数据分析'], answer: 'B', focus: '数据分析与数据挖掘关系', explanation: '数据分析是基础（了解业务现状），数据挖掘是进阶（当数据量极大、人眼与传统逻辑想不清时，靠算法模型寻找深层规律）。' },
      { type: 'multichoice', question: '以下哪些属于数据挖掘的描述任务（Descriptive Tasks）？（多选）', options: ['聚类（Clustering）', '分类（Classification）', '关联规则发现（Association Rule Discovery）', '回归（Regression）', '异常检测'], answer: ['A', 'C', 'E'], focus: '描述任务与预测任务', explanation: '描述任务包括聚类、关联规则发现和异常检测，目标是发现数据中潜在的模式和规律。分类和回归属于预测任务。' },
      { type: 'multichoice', question: '以下关于数据挖掘与统计学关系的说法，正确的有哪些？（多选）', options: ['数据挖掘是为了替代统计学', '数据挖掘是统计学的延伸和扩展', '数据挖掘能更自动地分析海量数据', '数据挖掘完全不需要统计学知识'], answer: ['B', 'C'], focus: '数据挖掘与统计学关系', explanation: '数据挖掘不是为了替代统计学，而是其延伸和扩展，能更自动地分析不适合传统统计分析的海量数据。' },
      { type: 'multichoice', question: '数据分析能力的8个等级中，属于"挖掘阶段（高级分析）"的有哪些？（多选）', options: ['统计分析', '多维分析/OLAP', '预报', '预测型建模', '优化'], answer: ['A', 'C', 'D', 'E'], focus: '8等级的两阶段划分', explanation: '挖掘阶段（高级分析）包括第5-8级：统计分析、预报、预测型建模、优化。多维分析/OLAP属于描述阶段（传统分析）的第3级。' },
      { type: 'multichoice', question: '以下哪些是三大主流数据挖掘过程模型的名称？（多选）', options: ['CRISP-DM模型', 'KDD模型', 'SEMMA模型', '5A模型'], answer: ['A', 'C', 'D'], focus: '三大过程模型', explanation: '三大主流数据挖掘过程模型是CRISP-DM（跨行业组织推动）、SEMMA（SAS Institute提出）和5A（SPSS公司提出）。KDD是知识发现的总称，不是具体的过程模型。' },
      { type: 'judge', question: '数据挖掘是KDD过程中的一个核心步骤，而非等同于KDD。', answer: '对', focus: 'KDD与数据挖掘关系', explanation: 'KDD是完整的知识发现流程，数据挖掘只是其中的核心步骤，负责使用算法从数据中发现模式。' },
      { type: 'judge', question: 'OLAP和数据挖掘都是采用归纳推理的方式从数据中发现规律。', answer: '错', focus: 'OLAP与数据挖掘的推理方式', explanation: 'OLAP是演绎推理（用户提出假设，通过工具验证），数据挖掘才是归纳推理（计算机自动寻找模型）。' },
      { type: 'judge', question: '预测任务的核心目标是根据输入变量的值去预测目标变量的值。', answer: '对', focus: '预测任务定义', explanation: '预测任务（Predictive Tasks）的核心目标是根据某些属性（输入变量）的值，去预测另一个特定属性（目标变量/因变量）的值。' },
      { type: 'judge', question: '在数据分析能力的8个等级中，"警报"属于挖掘阶段。', answer: '错', focus: '8等级阶段划分', explanation: '"警报"是第4级，属于描述阶段（传统分析），而非挖掘阶段。挖掘阶段从第5级"统计分析"开始。' },
      { type: 'judge', question: '狭义数据挖掘包含数据准备、数据挖掘和解释评估三个阶段。', answer: '对', focus: '狭义数据挖掘三阶段', explanation: '狭义数据挖掘确实包含数据准备、数据挖掘、解释评估三个阶段，其中数据准备往往占据大部分时间。' },
      { type: 'fill', question: 'KDD的全称是____（Knowledge Discovery in Databases）。', answer: '知识发现', alternatives: ['数据库中的知识发现', 'Knowledge Discovery in Databases', 'KDD'], focus: 'KDD概念', explanation: 'KDD即Knowledge Discovery in Databases，中文译为"知识发现"或"数据库中的知识发现"，是指从数据中发现有用知识的完整过程。' },
      { type: 'fill', question: '数据挖掘的两大核心任务分别是____任务和描述任务。', answer: '预测', alternatives: ['Predictive', '预测任务'], focus: '数据挖掘任务分类', explanation: '数据挖掘的两大核心任务是预测任务（Predictive）和描述任务（Descriptive）。预测任务包括分类和回归，描述任务包括聚类、关联规则发现等。' },
      { type: 'fill', question: 'CRISP-DM模型的六大步骤依次是：商业理解→数据理解→____→建模→模型评估→结果发布。', answer: '数据准备', alternatives: ['数据预处理', 'Data Preparation'], focus: 'CRISP-DM步骤', explanation: 'CRISP-DM的六大步骤为：商业理解→数据理解→数据准备→建模→模型评估→结果发布。数据准备是第三步。' },
      { type: 'essay', question: '请简述数据挖掘与OLAP、统计学的概念区分。', answer: '1. 数据挖掘 vs OLAP：OLAP是演绎推理，用户提出假设，通过工具验证；数据挖掘是归纳推理，无需预设假设，计算机自动寻找模型和规律。\n2. 数据挖掘 vs 统计学：数据挖掘不是为了替代统计学，而是其延伸和扩展。数据挖掘能更自动地分析不适合传统统计分析的海量数据，处理更大规模、更高维度的数据集。', focus: '数据挖掘概念区分' },
      { type: 'essay', question: '请列举数据分析能力的8个等级，并说明描述阶段和挖掘阶段各包含哪些等级。', answer: '数据分析能力的8个等级：\n描述阶段（传统分析）：\n1. 常规报表（发生什么事）\n2. 即席查询（有多少数量、在哪里）\n3. 多维分析/OLAP（问题到底出在哪里，通过钻取层层剥笋）\n4. 警报（什么时候该有所反应）\n\n挖掘阶段（高级分析）：\n5. 统计分析（为什么出现这种情况，寻找历史规律）\n6. 预报（持续这种趋势，未来会怎么样）\n7. 预测型建模（接下来会发生什么，哪些客户会流失/响应）\n8. 优化（如何把事情做得更好，决策最优解）', focus: '8个等级与两阶段' }
    ]
  },
  {
    title: '第2章测试',
    questions: [
      { type: 'choice', question: 'SEMMA模型由哪个机构提出？', options: ['IBM', 'SAS Institute', 'SPSS公司', 'Microsoft'], answer: 'B', focus: 'SEMMA提出者', explanation: 'SEMMA模型由SAS Institute提出，其五大步骤为：数据抽样(Sample)→数据探索(Explore)→预处理/数据调整(Modify)→模型研发(Model)→知识解释评价(Assess)。' },
      { type: 'choice', question: '5A模型的核心特点是？', options: ['业务驱动，循环往复', '技术驱动，步骤严谨', '需求明确，数据成熟', '以数据可视化为中心'], answer: 'B', focus: '5A模型特点', explanation: '5A模型由SPSS公司提出，核心特点是技术驱动，步骤严谨。其五大步骤为：评价需求(Assess)→存取数据(Access)→完备分析(Analyze)→模型演示(Act)→结果展现(Automate)。' },
      { type: 'choice', question: 'CRISP-DM模型中，"将模糊的业务问题转化为标准的技术流程"体现了什么核心特点？', options: ['技术驱动', '业务驱动，循环往复', '结果驱动', '数据驱动'], answer: 'B', focus: 'CRISP-DM核心特点', explanation: 'CRISP-DM的核心特点是业务驱动、循环往复，强调将"模糊的业务问题"转化为"标准的技术流程"，是最常用的企业大型项目模型。' },
      { type: 'choice', question: 'SEMMA模型适用于什么场景？', options: ['企业大型项目和业务驱动的场景', '需求明确、数据成熟的科研或算法开发场景', '商业快速决策场景', '实时数据处理场景'], answer: 'B', focus: 'SEMMA适用场景', explanation: 'SEMMA模型适用于需求明确、数据成熟的科研或算法开发场景。' },
      { type: 'choice', question: '广义数据挖掘涵盖的全生命周期是？', options: ['数据准备、数据挖掘、解释评估', '问题理解、数据挖掘、辅助决策', '数据清洗、建模、结果发布', '数据抽样、探索、预处理'], answer: 'B', focus: '广义数据挖掘', explanation: '广义数据挖掘涵盖问题理解、数据挖掘、辅助决策等面向问题解决的全生命周期，更趋向于组织的管理、经营和商业优化。' },
      { type: 'choice', question: '5A模型的最后一个步骤是？', options: ['模型演示(Act)', '结果展现(Automate)', '完备分析(Analyze)', '评价需求(Assess)'], answer: 'B', focus: '5A步骤', explanation: '5A模型的五大步骤依次为：评价需求(Assess)→存取数据(Access)→完备分析(Analyze)→模型演示(Act)→结果展现(Automate)。最后一步是结果展现(Automate)。' },
      { type: 'multichoice', question: '以下关于CRISP-DM模型的描述，正确的有哪些？（多选）', options: ['由跨行业组织（IBM等主流推动）提出', '包含六大步骤', '强调业务驱动，循环往复', '适用于需求明确、数据成熟的科研场景', '是最常用的企业大型项目模型'], answer: ['A', 'B', 'C', 'E'], focus: 'CRISP-DM特点', explanation: 'CRISP-DM由跨行业组织推动，包含商业理解→数据理解→数据准备→建模→模型评估→结果发布六大步骤，业务驱动且循环往复，是最常用的企业大型项目模型。"适用于需求明确、数据成熟的科研场景"是SEMMA的特点。' },
      { type: 'multichoice', question: 'SEMMA模型的五大步骤包括以下哪些？（多选）', options: ['数据抽样(Sample)', '数据探索(Explore)', '商业理解', '模型研发(Model)', '知识解释评价(Assess)'], answer: ['A', 'B', 'D', 'E'], focus: 'SEMMA步骤', explanation: 'SEMMA模型的五大步骤为：数据抽样(Sample)→数据探索(Explore)→预处理/数据调整(Modify)→模型研发(Model)→知识解释评价(Assess)。"商业理解"是CRISP-DM的步骤。' },
      { type: 'multichoice', question: '以下关于5A模型的描述，正确的有哪些？（多选）', options: ['由SPSS公司提出', '核心特点是结果驱动，强调落地', '用于商业快速决策', '第一个步骤是存取数据(Access)'], answer: ['A', 'B', 'C'], focus: '5A模型特点', explanation: '5A模型由SPSS公司提出，核心特点是技术驱动、步骤严谨，结果驱动、强调落地，用于商业快速决策。但第一个步骤是评价需求(Assess)，而非存取数据(Access)。' },
      { type: 'multichoice', question: '狭义数据挖掘的三个阶段包括？（多选）', options: ['数据准备', '数据挖掘', '解释评估', '商业理解', '结果发布'], answer: ['A', 'B', 'C'], focus: '狭义数据挖掘三阶段', explanation: '狭义数据挖掘包含数据准备、数据挖掘、解释评估三个阶段。"商业理解"和"结果发布"是CRISP-DM模型的步骤。' },
      { type: 'judge', question: 'CRISP-DM模型的六大步骤是线性执行的，不需要循环往复。', answer: '错', focus: 'CRISP-DM循环特性', explanation: 'CRISP-DM的核心特点是业务驱动、循环往复，不是线性执行。在模型评估后可能需要返回前面的步骤进行迭代。' },
      { type: 'judge', question: 'SEMMA模型中的第一个步骤是数据探索(Explore)。', answer: '错', focus: 'SEMMA步骤顺序', explanation: 'SEMMA模型的第一步是数据抽样(Sample)，第二步才是数据探索(Explore)。完整顺序为：Sample→Explore→Modify→Model→Assess。' },
      { type: 'judge', question: '5A模型强调结果驱动和落地，用于商业快速决策。', answer: '对', focus: '5A核心特点', explanation: '5A模型确实以结果驱动、强调落地为核心特点，适用于商业快速决策场景。' },
      { type: 'judge', question: '广义数据挖掘只包含数据准备、数据挖掘和解释评估三个阶段。', answer: '错', focus: '广义与狭义数据挖掘', explanation: '只有狭义数据挖掘才包含这三个阶段。广义数据挖掘涵盖问题理解、数据挖掘、辅助决策等面向问题解决的全生命周期。' },
      { type: 'judge', question: '在三大过程模型中，数据准备都是建模前不可或缺的必经环节。', answer: '对', focus: '数据准备的重要性', explanation: '无论是CRISP-DM（数据准备）、SEMMA（抽样+预处理Modify）、还是5A（存取数据Access），数据准备都是建模前不可或缺的环节。' },
      { type: 'fill', question: 'CRISP-DM模型由____组织（IBM等主流推动）提出。', answer: '跨行业', alternatives: ['跨行业数据挖掘标准流程', 'CRISP-DM'], focus: 'CRISP-DM提出者', explanation: 'CRISP-DM即Cross-Industry Standard Process for Data Mining，由跨行业组织提出，IBM等主流推动。' },
      { type: 'fill', question: 'SEMMA模型中，Modify步骤的含义是____。', answer: '预处理/数据调整', alternatives: ['数据调整', '预处理', 'Modify', '数据修改'], focus: 'SEMMA步骤含义', explanation: 'SEMMA中Modify步骤指的是预处理/数据调整，即将探索阶段发现的数据问题进行修正和处理。' },
      { type: 'fill', question: '数据分析是____（了解业务现状），数据挖掘是进阶（寻找深层规律）。', answer: '基础', alternatives: ['基础工作', '前提'], focus: '数据分析与挖掘关系', explanation: '数据分析是基础（了解业务现状），数据挖掘是进阶（当数据量极大时，靠算法模型寻找深层规律）。' },
      { type: 'essay', question: '请比较三大主流数据挖掘过程模型（CRISP-DM、SEMMA、5A）的提出者、步骤数和核心特点。', answer: '1. CRISP-DM模型：由跨行业组织（IBM等主流推动）提出，包含六大步骤（商业理解→数据理解→数据准备→建模→模型评估→结果发布），核心特点是业务驱动、循环往复，强调将模糊的业务问题转化为标准的技术流程，是最常用的企业大型项目模型。\n2. SEMMA模型：由SAS Institute提出，包含五大步骤（Sample→Explore→Modify→Model→Assess），适用于需求明确、数据成熟的科研或算法开发场景。\n3. 5A模型：由SPSS公司提出，包含五大步骤（Assess→Access→Analyze→Act→Automate），核心特点是技术驱动、步骤严谨、结果驱动、强调落地，用于商业快速决策。', focus: '三大过程模型对比' },
      { type: 'essay', question: '请阐述狭义数据挖掘与广义数据挖掘的区别。', answer: '狭义数据挖掘包含三个阶段：数据准备、数据挖掘、解释评估。其中数据准备往往占据大部分时间，包含数据清洗、特征工程、变量选择等。\n\n广义数据挖掘涵盖更广泛的全生命周期：问题理解、数据挖掘、辅助决策等面向问题解决的全过程，更趋向于组织的管理、经营和商业优化。广义数据挖掘不仅关注技术层面，还关注业务问题的理解和最终决策的支持。', focus: '狭义与广义数据挖掘' }
    ]
  },
  {
    title: '第3章测试',
    questions: [
      { type: 'choice', question: '数据准备的主要环节正确顺序是？', options: ['数据收集→数据集成→数据抽样→数据清理→数据变换→数据规约', '数据收集→数据抽样→数据集成→数据清理→数据规约→数据变换', '数据抽样→数据收集→数据清理→数据集成→数据变换→数据规约', '数据收集→数据清理→数据抽样→数据集成→数据变换→数据规约'], answer: 'B', focus: '数据准备环节顺序', explanation: '数据准备的主要环节依次为：数据收集→数据抽样→数据集成→数据清理→数据规约→数据变换。' },
      { type: 'choice', question: '分层抽样适用于什么样的总体结构？', options: ['群内异质、群间同质', '层内同质、层间异质', '完全随机分布', '周期性分布'], answer: 'B', focus: '分层抽样适用条件', explanation: '分层抽样适用于层内同质、层间异质的总体。先将总体分为同质、互不交叉的层，在各层内独立抽样。' },
      { type: 'choice', question: '整群抽样的主要目的是？', options: ['提高精度', '降低成本', '增加样本代表性', '消除周期性'], answer: 'B', focus: '整群抽样目的', explanation: '整群抽样的主要目的是降低成本。将总体分为群，随机抽取若干群，对抽中群内的个体进行全调查。适用于群内异质、群间同质的总体。' },
      { type: 'choice', question: '拉依达准则（3σ原则）中，数据被判定为异常值的条件是？', options: ['数据落在[μ-2σ, μ+2σ]之外', '数据落在[μ-3σ, μ+3σ]之外', '数据落在[μ-σ, μ+σ]之外', '数据等于均值'], answer: 'B', focus: '3σ原则', explanation: '拉依达准则（3σ原则）规定，若数据落在[μ-3σ, μ+3σ]区间之外，即判定为异常值。在该区间外的概率仅为0.27%。' },
      { type: 'choice', question: 'Min-Max归一化的映射目标区间是？', options: ['[-1, 1]', '[0, 1]', '(-∞, +∞)', '[0, 100]'], answer: 'B', focus: 'Min-Max归一化', explanation: 'Min-Max归一化将数据映射到[0,1]区间，公式为 x\'=(x-min)/(max-min)。' },
      { type: 'choice', question: '独热编码(One-Hot Encoding)的主要缺点是？', options: ['引入虚假顺序关系', '维度爆炸', '计算速度慢', '无法处理文本数据'], answer: 'B', focus: '独热编码缺点', explanation: '独热编码的主要缺点是维度爆炸。如果一个特征有1万个不同的类别，就会衍生出1万列数据。引入虚假顺序关系是标签编码的缺点。' },
      { type: 'multichoice', question: '高质量数据的四大要求包括哪些？（多选）', options: ['完整的、一致的', '易于处理的、宜于运用数据挖掘算法的', '具有代表性的', '包含能够反映问题实质的特征数据'], answer: ['A', 'B', 'C', 'D'], focus: '高质量数据要求', explanation: '高质量数据的四大要求是：完整一致的、易于处理的、具有代表性的、包含能够反映问题实质的特征数据。' },
      { type: 'multichoice', question: '以下哪些属于数据集成的四大难点？（多选）', options: ['系统与数据异构', '分布性与传输性', '数据量过大', '自治性与松耦合', '数据结构的不完整性与不关联性'], answer: ['A', 'B', 'D', 'E'], focus: '数据集成四大难点', explanation: '数据集成的四大难点是：系统与数据异构、分布性与传输性、自治性与松耦合、数据结构的不完整性与不关联性。"数据量过大"不是四大难点之一。' },
      { type: 'multichoice', question: '以下关于属性变换方法的描述，正确的有哪些？（多选）', options: ['归一化将数据映射到[0,1]区间', '标准化使均值为0，标准差为1', '归一化适用于聚类、SVM等大多数算法', '非线性变换可处理偏态数据'], answer: ['A', 'B', 'D'], focus: '属性变换方法', explanation: '归一化映射到[0,1]区间（适用于图像处理、神经网络），标准化使均值为0标准差为1（适用于聚类、SVM等大多数算法），非线性变换处理偏态数据。选项C错误，聚类、SVM等大多数算法首选的是标准化，而非归一化。' },
      { type: 'multichoice', question: '离散化的作用包括以下哪些？（多选）', options: ['数据规约和维规约', '消除奇异值影响', '减少属性值个数', '提高数据精度', '使结果知识表达更简洁'], answer: ['A', 'B', 'C', 'E'], focus: '离散化作用', explanation: '离散化的作用包括：数据规约/维规约、满足某些算法对离散属性的要求、产生概念分层结构、消除奇异值影响、减少属性值个数使结果更简洁。离散化不会提高数据精度。' },
      { type: 'judge', question: '统计学抽样的目的是因为获取全样本的成本太高，数据挖掘抽样的目的是因为处理全样本的计算成本太高。', answer: '对', focus: '抽样目的差异', explanation: '统计学抽样因为获取全样本的资金和时间成本太高（如无法普查所有人），数据挖掘抽样因为处理全样本的计算成本太高（数据体量、维度过大，算法跑不动）。' },
      { type: 'judge', question: '系统抽样如果数据存在周期性模式，可能导致样本偏差。', answer: '对', focus: '系统抽样缺点', explanation: '系统抽样按一定顺序排列并等距离抽样，如果数据存在周期性模式，等距采样可能与周期重合，导致样本偏差。' },
      { type: 'judge', question: '标签编码(Label Encoding)适合用于没有自然顺序的类别特征。', answer: '错', focus: '标签编码适用范围', explanation: '标签编码会给每个类别随机映射为整数，引入虚假的顺序关系，不适合无序类别。无序类别应使用独热编码。标签编码适合有序特征，但对于有序特征更好的选择是有序编码(Ordinal Encoding)。' },
      { type: 'judge', question: 'Z-Score标准化处理后的数据均值为1，标准差为0。', answer: '错', focus: 'Z-Score标准化', explanation: 'Z-Score标准化处理后的数据均值为0，标准差为1，而不是均值为1标准差为0。公式为z=(x-μ)/σ。' },
      { type: 'judge', question: '数据联邦(Data Federation)不实际保存或复制数据，只提供虚拟化集成视图。', answer: '对', focus: '数据联邦特点', explanation: '数据联邦基于数据查询操作，从不同数据源完成数据汇集，不实际保存/复制/迁移数据，只保存数据来源及连接信息，提供虚拟化集成视图。' },
      { type: 'fill', question: '已知某正态分布数据集的均值μ=50，标准差σ=5，根据拉依达准则（3σ原则），若某数据点的值为____以上，则被判定为异常值。', answer: '65', alternatives: ['65以上', '大于65'], focus: '3σ原则计算', explanation: '根据3σ原则，异常值判定区间为[μ-3σ, μ+3σ]=[50-15, 50+15]=[35, 65]。超过65或低于35的数据点被判定为异常值。' },
      { type: 'fill', question: 'Min-Max归一化公式为x\'=(x-min)/(max-min)，若某属性最小值为10，最大值为60，则值为35的数据归一化后的结果是____。', answer: '0.5', alternatives: ['1/2', '0.50'], focus: 'Min-Max归一化计算', explanation: 'x\'=(35-10)/(60-10)=25/50=0.5。' },
      { type: 'fill', question: '整群抽样适用于群内____、群间同质的总体。', answer: '异质', alternatives: ['差异大', '不同质', '异构'], focus: '整群抽样适用条件', explanation: '整群抽样适用于群内异质、群间同质的总体。这与分层抽样（层内同质、层间异质）恰好相反。' },
      { type: 'essay', question: '请对比分层抽样与整群抽样的区别，包括抽样方式、结构要求和目的。', answer: '分层抽样与整群抽样的核心区别：\n1. 抽样方式：分层抽样先分层，每层都抽人；整群抽样先分群，抽若干群并对群内全调查。\n2. 结构要求：分层抽样要求层内同质、层间异质；整群抽样要求群内异质、群间同质。\n3. 目的：分层抽样的目的是提高精度；整群抽样的目的是降低成本。\n4. 适用条件：分层抽样适用于层间异质性大、层内同质性强的情况；整群抽样适用于群间差异小、群内各个体差异大的情况。', focus: '分层抽样与整群抽样对比' },
      { type: 'essay', question: '请阐述数据预处理在数据挖掘中所处的地位和所发挥的作用。', answer: '一、地位：基础性与决定性地位\n1. 流程基石地位：在KDD全流程中，数据预处理是最前端的环节，后续的数据挖掘、模式评估都建立在预处理后的数据之上。\n2. 耗时核心地位：数据准备往往占据整个项目的大部分时间。\n3. 决定性地位：数据的质量、表现形式和代表性对算法选择、参数选取和最终结果起决定性作用——"垃圾进，垃圾出"。\n\n二、作用：\n1. 保证数据质量：通过数据清理（如3σ异常检测）、数据集成、填补缺失值等手段。\n2. 适配算法需求：通过归一化、标准化等变换满足不同算法输入要求。\n3. 提升算法效率与效果：离散化可消除奇异值影响，减少属性值个数。\n4. 发现数据深层特征：从另一个角度发现数据更为显著的特征。\n5. 为后续步骤提供关键依据：数据探索可初步了解数据的内容、性质、质量。', focus: '数据预处理的地位和作用' }
    ]
  },
  {
    title: '第4章测试',
    questions: [
      { type: 'choice', question: '数据探索(Data Exploration)的核心作用是？', options: ['直接进行数据挖掘建模', '初步了解数据的内容、性质、质量，为后续分析提供依据', '对数据进行最终清洗', '生成最终报告'], answer: 'B', focus: '数据探索作用', explanation: '数据探索的核心作用是初步了解数据的内容、性质、质量（评估完整性和一致性等），利用人的认知能力来识别数据的性质、模式和分布，为后续选择合适的数据预处理工具和数据分析技术提供关键依据。' },
      { type: 'choice', question: '以下哪种集中量数受极端值影响最大？', options: ['中位数', '众数', '均值', '百分位数'], answer: 'C', focus: '集中量数特点', explanation: '均值（平均数）受极端值影响最大，因为它是所有数据的总和除以个数。中位数和众数不受极端值影响。可用截断均值来改善这个问题。' },
      { type: 'choice', question: 'Pearson相关系数r=0.994表示两个变量之间是什么关系？', options: ['无相关', '弱正相关', '高度线性正相关', '负相关'], answer: 'C', focus: '相关系数', explanation: 'Pearson相关系数取值范围为[-1,1]，r=0.994接近1，表示两个变量之间存在高度线性正相关关系。' },
      { type: 'choice', question: '四分位差(IQR)的计算公式是？', options: ['max - min', 'Q3 - Q1', '均值 - 中位数', '标准差的平方'], answer: 'B', focus: 'IQR计算', explanation: '四分位差(IQR) = Q3 - Q1 = P75 - P25，代表中间50%数据的波动范围，抗异常值能力极强。' },
      { type: 'choice', question: '截断均值的计算方法是？', options: ['只取数据的前半部分计算均值', '去掉两头最高和最低一定比例的数据后计算均值', '用中位数替代均值', '对所有数据加权平均'], answer: 'B', focus: '截断均值', explanation: '截断均值先将所有数据从小到大排序，然后去掉两头最高和最低的一定比例（如各5%）的数据，只用中间剩下的"温和数据"来计算平均值，以减小极端值的影响。' },
      { type: 'choice', question: '协方差为正值表示两个变量的变化趋势？', options: ['相反', '一致', '无关', '呈周期性'], answer: 'B', focus: '协方差含义', explanation: '协方差为正值表示两个变量变化趋势一致（一个大于期望，另一个也大于期望）；为负值表示变化趋势相反。' },
      { type: 'multichoice', question: '数据探索的两大主要方法包括？（多选）', options: ['可视化(Visualization)', '数据挖掘建模', '数据统计分析', '特征工程'], answer: ['A', 'C'], focus: '数据探索方法', explanation: '数据探索的两大主要方法是可视化（将数据转化为可视的图或表格展现）和数据统计分析（利用统计指标对数据的分布特性进行定量描述）。' },
      { type: 'multichoice', question: '以下哪些差异量数具有抗异常值能力？（多选）', options: ['极差(Range)', '标准差', '中位数绝对偏差(MAD)', '四分位差(IQR)'], answer: ['C', 'D'], focus: '差异量数抗异常值能力', explanation: 'MAD（中位数绝对偏差）对异常值极度不敏感，可替代标准差。IQR（四分位差）代表中间50%数据波动范围，抗异常值能力极强。极差和标准差都容易受极端值影响。' },
      { type: 'multichoice', question: '人类视觉在数据分析中的优势体现在哪些方面？（多选）', options: ['模式认知', '变化趋势评估', '异常值检测', '精确数值计算'], answer: ['A', 'B', 'C'], focus: '视觉优势', explanation: '人类视觉优势体现在模式认知（形状、颜色和聚类揭示数据结构）、变化趋势评估（坡度直接反映变化速率）、异常值检测（远离群体的点一眼可见）。精确数值计算不是视觉的优势。' },
      { type: 'multichoice', question: '以下关于协方差矩阵和相关矩阵的描述，正确的有哪些？（多选）', options: ['协方差矩阵是对称矩阵', '协方差矩阵对角线为方差', '相关矩阵对角线为1', '相关矩阵是非对称矩阵'], answer: ['A', 'B', 'C'], focus: '协方差矩阵与相关矩阵', explanation: '协方差矩阵是对称矩阵，对角线为方差，非对角线为协方差。相关矩阵对角线为1（自己与自己完全相关），也是对称矩阵。' },
      { type: 'judge', question: '众数可能不唯一或不存在，且缺乏敏感性。', answer: '对', focus: '众数特点', explanation: '众数是出现次数最多的值，可能不唯一（多个众数）或不存在（所有值出现次数相同），且对数据变化的敏感性较低。' },
      { type: 'judge', question: '极差(Range)是衡量数据离散程度最稳健的指标。', answer: '错', focus: '极差的局限性', explanation: '极差=max-min，虽然简单，但受极端值影响大，不能衡量每个数据的变化，不是最稳健的指标。MAD和IQR更稳健。' },
      { type: 'judge', question: '当两个变量是同一个变量时，其协方差就是该变量的方差。', answer: '对', focus: '协方差与方差关系', explanation: '协方差衡量两个变量之间的总体误差。当两个变量是同一个变量时，协方差退化为方差，这是协方差的特例。' },
      { type: 'judge', question: 'Pearson相关系数的取值范围是[0, 1]。', answer: '错', focus: '相关系数取值范围', explanation: 'Pearson相关系数的取值范围是[-1, 1]，其中-1表示完全负相关，0表示无线性相关，1表示完全正相关。' },
      { type: 'judge', question: 'MAD异常值检测中，若数据点与中位数距离超过3×MAD，通常视为异常值。', answer: '对', focus: 'MAD异常值检测', explanation: 'MAD的异常值检测规则：若数据点与中位数的距离超过K×MAD（通常K=3），则视为异常值。MAD对异常值极度不敏感，是一种稳健的检测方法。' },
      { type: 'fill', question: 'IQR（四分位差）等于Q3-Q1，代表中间____%数据的波动范围。', answer: '50', alternatives: ['五十', '50%'], focus: 'IQR含义', explanation: 'IQR=Q3-Q1=P75-P25，即第75百分位数减去第25百分位数，代表中间50%数据的波动范围。' },
      { type: 'fill', question: '相关矩阵的对角线元素值为____。', answer: '1', alternatives: ['1.0', '一'], focus: '相关矩阵特性', explanation: '相关矩阵第ij个元素是第i个和第j个属性之间的相关性，对角线元素是自己与自己的相关性，值为1。' },
      { type: 'fill', question: '方差是____的特例（当两个变量是同一个变量时）。', answer: '协方差', alternatives: ['Covariance'], focus: '方差与协方差关系', explanation: '当两个变量是同一个变量时，协方差就变成了该变量的方差。因此方差是协方差的特例。' },
      { type: 'essay', question: '请列举并比较五种差异量数（极差、标准差、方差、MAD、IQR）的定义和特点。', answer: '1. 极差(Range)：max-min，简单直观，但受极端值影响大，不能衡量每个数据的变化。\n2. 标准差：方差的平方根，反映数据离散程度，受极端值影响。\n3. 方差：标准差的平方，最常用统计量，但易被离群值扭曲。\n4. 中位数绝对偏差(MAD)：各数据与中位数绝对差的中位数，稳健，对异常值极度不敏感，可替代标准差。\n5. 四分位差(IQR)：Q3-Q1=P75-P25，代表中间50%数据波动范围，抗异常值能力极强。', focus: '差异量数对比' },
      { type: 'essay', question: '请说明可视化在数据探索中相比纯数据分析的优势。', answer: '可视化在数据探索中的优势主要体现在三个方面：\n1. 模式认知：形状、颜色和聚类立刻揭示数据结构（如相关性），而纯数据需要复杂统计计算才能发现规律。\n2. 趋势评估：坡度陡峭程度直接反映增长或下降速度，而纯数据必须对比前后数值，难以直观感受变化速率。\n3. 异常检测：远离群体的点非常"刺眼"，一眼可见，而异常值在纯数据中容易淹没在大量数据中被忽略。\n4. 人类大脑对图形化的数据模式认知能力，是任何纯数字化分析工具都无法比拟的，尤其在海量信息的模式认知和异常模式识别上。', focus: '可视化优势' }
    ]
  },
  {
    title: '第5章测试',
    questions: [
      { type: 'choice', question: '关联规则X→Y的置信度公式是？', options: ['σ(X∪Y)/N', 'σ(X∪Y)/σ(X)', 'σ(X)/σ(X∪Y)', 'σ(X)/N'], answer: 'B', focus: '置信度公式', explanation: '置信度c(X→Y) = σ(X∪Y)/σ(X) = s(X∪Y)/s(X)，表示X出现时Y出现的条件概率。' },
      { type: 'choice', question: 'Apriori算法利用了哪个原理进行剪枝？', options: ['鸽巢原理', '支持度单调性（先验原理）', '最大最小定理', '中心极限定理'], answer: 'B', focus: 'Apriori原理', explanation: 'Apriori算法利用支持度单调性（先验原理）进行剪枝：如果一个项集是频繁的，则它的所有子集也一定是频繁的；反之，如果一个项集是非频繁的，则它的所有超集也一定是非频繁的。' },
      { type: 'choice', question: 'FP-Growth算法相比Apriori的主要优化是？', options: ['使用更多的候选项集', '只扫描数据库一次', '不产生候选项集，通过FP树直接提取频繁项集', '使用更高的支持度阈值'], answer: 'C', focus: 'FP-Growth优化', explanation: 'FP-Growth通过构建FP树（频繁模式树）将数据库压缩到内存中，通过递归挖掘直接提取频繁项集，不产生候选项集，解决了Apriori需要多次扫描数据库和产生海量候选集的问题。' },
      { type: 'choice', question: '提升度Lift=1表示前件和后件之间是什么关系？', options: ['正相关', '负相关', '独立', '强关联'], answer: 'C', focus: '提升度含义', explanation: '提升度Lift=1表示前件和后件相互独立；<1表示互斥（负相关）；>1表示有效强关联；>3认为有价值。' },
      { type: 'choice', question: '关联规则挖掘的两个阶段是？', options: ['数据准备和模型评估', '产生频繁项集和生成规则', '候选项集生成和剪枝', '数据清洗和模式发现'], answer: 'B', focus: '关联规则挖掘框架', explanation: '关联规则挖掘分为两个阶段：(1)产生频繁项集——发现满足支持度阈值的所有项集；(2)生成规则——从频繁项集中提取所有高置信度的规则（强规则）。' },
      { type: 'choice', question: '以下哪种关联关系描述的是"买iPhone后买保护壳"？', options: ['简单关联关系', '序列关联关系', '因果关系', '函数关系'], answer: 'B', focus: '关联关系类型', explanation: '序列关联关系描述事物在时间上以一定先后顺序发生的关系，如买iPhone后买保护壳。简单关联关系是没有共同属性的事物组合，元素会较大概率同时出现。' },
      { type: 'multichoice', question: '以下哪些是关联规则的客观兴趣度度量指标？（多选）', options: ['提升度(Lift)', '杠杆率(Leverage)', '确信度(Conviction)', '支持度(Support)', '兴趣因子(Interest Factor)'], answer: ['A', 'B', 'C', 'E'], focus: '客观兴趣度度量', explanation: '客观兴趣度度量指标包括提升度、杠杆率、确信度和兴趣因子。支持度和置信度是基础评价指标，不是客观兴趣度度量指标，它们存在"虚假高置信度"的问题。' },
      { type: 'multichoice', question: 'FP-Growth算法构建FP树的过程中，以下描述正确的有哪些？（多选）', options: ['扫描数据集一次确定支持度计数', '扫描数据集二次构建FP树', '频繁项按支持度递增排序', '通过条件树递归挖掘频繁项集'], answer: ['A', 'B', 'D'], focus: 'FP树构建过程', explanation: 'FP-Growth构建FP树：第一次扫描确定支持度计数并丢弃非频繁项，频繁项按支持度递减排序（不是递增）；第二次扫描构建FP树（共享前缀路径）；最后以自底向上方式通过条件树递归挖掘。' },
      { type: 'multichoice', question: '支持度-置信度框架存在哪些局限性？（多选）', options: ['可能产生虚假高置信度规则', '无法区分正相关和负相关', '后件本身很热门时置信度会被人为拔高', '不能处理数值型数据'], answer: ['A', 'B', 'C'], focus: '支持度-置信度框架局限', explanation: '支持度-置信度框架的局限性：可能产生虚假高置信度规则（如后件本身是超级热门商品），无法区分正相关和负相关。需要提升度和兴趣因子来剔除虚假规则。' },
      { type: 'multichoice', question: 'Apriori算法的先验原理包含以下哪些推论？（多选）', options: ['频繁项集的所有子集也一定是频繁的', '非频繁项集的所有超集也一定是非频繁的', '频繁项集的所有超集也一定是频繁的', '非频繁项集的所有子集也一定是非频繁的'], answer: ['A', 'B'], focus: '先验原理推论', explanation: '先验原理：频繁项集→子集也频繁（正推）；非频繁项集→超集也非频繁（逆推，用于剪枝）。频繁项集的超集不一定频繁，非频繁项集的子集不一定非频繁。' },
      { type: 'judge', question: 'FP-Growth算法需要产生候选项集才能找到频繁项集。', answer: '错', focus: 'FP-Growth特点', explanation: 'FP-Growth的核心优势就是不需要产生候选项集，通过构建FP树并递归挖掘条件树来直接提取频繁项集。' },
      { type: 'judge', question: '提升度Lift>3的关联规则被认为是有价值的。', answer: '对', focus: '提升度判断标准', explanation: '提升度Lift=1表示独立，<1表示互斥（负相关），>1表示有效强关联，>3认为有实际应用价值。' },
      { type: 'judge', question: '关联规则X→Y中，X和Y可以有交集。', answer: '错', focus: '关联规则定义', explanation: '关联规则X→Y是蕴含表达式，要求X∩Y=∅（空集），即X和Y不能有交集。' },
      { type: 'judge', question: '支持度确定规则在多大程度上适用于整个数据集。', answer: '对', focus: '支持度含义', explanation: '支持度s(X→Y)=σ(X∪Y)/N，表示包含X∪Y的事务占总事务的比例，确定规则在多大程度上适用于整个数据集。' },
      { type: 'judge', question: 'Apriori算法只需要扫描数据库一次。', answer: '错', focus: 'Apriori扫描次数', explanation: 'Apriori算法需要多次扫描数据库（每一层候选项集都需要扫描一次），这是其主要缺点之一。FP-Growth只需扫描两次。' },
      { type: 'fill', question: '某超市共有100笔交易，其中包含面包的有60笔，包含牛奶的有70笔，同时包含面包和牛奶的有42笔。规则{面包}→{牛奶}的支持度为____。', answer: '0.42', alternatives: ['42%', '42/100'], focus: '支持度计算', explanation: '支持度s({面包}→{牛奶}) = σ({面包,牛奶})/N = 42/100 = 0.42。' },
      { type: 'fill', question: '基于上题数据，规则{面包}→{牛奶}的置信度为____。', answer: '0.7', alternatives: ['70%', '42/60', '0.70'], focus: '置信度计算', explanation: '置信度c({面包}→{牛奶}) = σ({面包,牛奶})/σ({面包}) = 42/60 = 0.7 = 70%。' },
      { type: 'fill', question: 'FP-Growth算法构建FP树时，需要扫描数据集____次。', answer: '2', alternatives: ['两', '二次', '两次'], focus: 'FP-Growth扫描次数', explanation: 'FP-Growth需要扫描数据集两次：第一次确定支持度计数并排序，第二次构建FP树。' },
      { type: 'essay', question: '请比较Apriori算法和FP-Growth算法的核心思想和优缺点。', answer: 'Apriori算法：\n- 核心思想：利用支持度单调性（先验原理）进行剪枝，产生候选项集后逐一验证支持度。\n- 优点：原理简单，易于理解和实现。\n- 缺点：需要多次扫描数据库，产生海量候选项集，效率低。\n\nFP-Growth算法：\n- 核心思想：构建FP树（频繁模式树）压缩数据，通过条件树递归挖掘，不产生候选项集。\n- 优点：只需扫描数据库两次，不需要产生候选项集，效率远高于Apriori。\n- 缺点：FP树构建和维护较复杂，对内存要求较高。', focus: 'Apriori与FP-Growth对比' },
      { type: 'essay', question: '请解释支持度-置信度框架的局限性，并说明提升度和兴趣因子如何解决这一问题。', answer: '支持度-置信度框架的局限性：\n当后件（Y）本身是非常热门的商品时（如90%的人都买大米），即使前件（X，如避雷针）与后件毫无关联，规则{X}→{Y}的置信度也可能高达90%。这就是"虚假高置信度伪规则"问题。\n\n提升度和兴趣因子的解决方案：\n- 提升度Lift和兴趣因子Interest Factor用于评估前件与后件之间的统计学相关性。\n- Lift=1表示独立，<1表示互斥（负相关），>1表示正相关，>3认为有价值。\n- 它们能够剔除"由于后件本身超级热门而导致的虚假高置信度伪规则"，筛选出真正有交叉销售价值的规则。\n- 它们回答的是：买了X之后，究竟是促进了买Y（正相关），还是抑制了买Y（负相关），还是两者无关（独立）。', focus: '支持度-置信度局限性与解决方案' }
    ]
  },
  {
    title: '第6章测试',
    questions: [
      { type: 'choice', question: '决策树中，叶结点存放的是？', options: ['一个属性上的测试', '一个测试输出', '一个类标号', '一个信息增益值'], answer: 'C', focus: '决策树结构', explanation: '决策树中，内部结点（非叶结点）表示在一个属性上的测试，分枝代表一个测试输出，叶结点存放一个类标号。' },
      { type: 'choice', question: '信息增益的主要缺陷是？', options: ['计算速度太慢', '偏向选择取值多的属性', '无法处理连续型数据', '不能用于多分类问题'], answer: 'B', focus: '信息增益缺陷', explanation: '信息增益偏向选择取值多的属性。例如"身份证号"每人一个值，信息增益极大，但分类毫无意义。信息增益率通过引入分裂信息惩罚项来修正这一缺陷。' },
      { type: 'choice', question: 'CART决策树使用的属性选择标准是？', options: ['信息增益', '信息增益率', 'Gini系数', '分类误差'], answer: 'C', focus: 'CART算法', explanation: 'CART决策树使用Gini系数作为属性选择标准。Gini系数计算比熵快（不用算log），表示随机抽两个样本属于不同类别的概率，越小越好。' },
      { type: 'choice', question: '朴素贝叶斯分类器的核心假设是？', options: ['所有特征都是连续型的', '所有特征互相独立', '所有特征都是离散型的', '所有类别先验概率相等'], answer: 'B', focus: '朴素贝叶斯假设', explanation: '朴素贝叶斯分类器的核心假设是所有特征互相独立（独立性假设），这使得P(X|C)可以简化为各特征条件概率的乘积，大幅简化计算。' },
      { type: 'choice', question: '先剪枝（预剪枝）与后剪枝的核心区别是？', options: ['先剪枝效果更好', '后剪枝速度更快', '先剪枝在树生长过程中提前停止，后剪枝先让树完整生长再修剪', '两者没有本质区别'], answer: 'C', focus: '剪枝方法对比', explanation: '先剪枝（预剪枝）在树生长过程中提前停止，速度快但可能剪枝过早。后剪枝先让树完整生长，再修剪不必要的分支，效果好但计算量大。' },
      { type: 'choice', question: '过拟合的典型表现是？', options: ['训练误差和检验误差都很高', '训练误差很低但检验误差很高', '训练误差和检验误差都很低', '训练误差很高但检验误差很低'], answer: 'B', focus: '过拟合表现', explanation: '过拟合的典型表现是训练误差很低（甚至为0），但检验误差很高。模型在训练集上表现很好，但对新数据的泛化能力差。' },
      { type: 'multichoice', question: '以下哪些是决策树的不纯度度量标准？（多选）', options: ['信息增益(InfoGain)', '信息增益率(GainRatio)', 'Gini系数', '分类误差', '支持度'], answer: ['A', 'B', 'C', 'D'], focus: '不纯度度量', explanation: '决策树的四种不纯度度量标准：信息增益（越大越好）、信息增益率（越大越好）、Gini系数（越小越好）、分类误差（越小越好）。支持度是关联规则的评价指标。' },
      { type: 'multichoice', question: '朴素贝叶斯分类器的优点包括哪些？（多选）', options: ['计算快，规则简单', '对噪声鲁棒', '容易处理缺失值', '不需要特征独立性假设'], answer: ['A', 'B', 'C'], focus: '朴素贝叶斯优点', explanation: '朴素贝叶斯分类器优点：计算快规则简单、对噪声鲁棒、容易处理缺失值、理论上错误率最小。缺点是要求特征独立性假设，属性相关时会降低效果。' },
      { type: 'multichoice', question: '导致决策树过拟合的原因有哪些？（多选）', options: ['噪声导致决策边界改变', '缺乏代表性样本', '训练数据过多', '根据少量训练记录做出决策'], answer: ['A', 'B', 'D'], focus: '过拟合原因', explanation: '过拟合原因：噪声导致决策边界改变、缺乏代表性样本（根据少量训练记录做出决策）。训练数据过多不是导致过拟合的原因。' },
      { type: 'multichoice', question: '贝叶斯分类中的核心概念包括哪些？（多选）', options: ['先验概率P(C)', '似然P(X|C)', '后验概率P(C|X)', '提升度Lift'], answer: ['A', 'B', 'C'], focus: '贝叶斯核心概念', explanation: '贝叶斯分类的核心概念：先验概率P(C)（不看特征时类别出现的概率）、似然P(X|C)（某类中出现这些特征的概率）、后验概率P(C|X)（看到特征后类别出现的概率）。提升度是关联规则的度量。' },
      { type: 'judge', question: '信息增益率通过引入分裂信息惩罚项来修正信息增益偏向取值多属性的缺陷。', answer: '对', focus: '信息增益率', explanation: '信息增益率=信息增益÷分裂信息。分裂信息是对"属性分了多少支"的惩罚项，分支越多数值越大，从而抑制了信息增益偏向取值多属性的倾向。' },
      { type: 'judge', question: '朴素贝叶斯分类器在实践中一定是最优的分类器。', answer: '错', focus: '朴素贝叶斯局限性', explanation: '朴素贝叶斯分类器理论上具有最小的错误率，但在实践中由于特征独立性假设往往不成立，所以不一定最优。' },
      { type: 'judge', question: 'Gini系数的值越小，表示数据的不纯度越低。', answer: '对', focus: 'Gini系数含义', explanation: 'Gini系数表示随机抽两个样本属于不同类别的概率。值越小说明数据越纯（某一类占绝对优势），不纯度越低。' },
      { type: 'judge', question: '后剪枝比先剪枝速度快，但效果较差。', answer: '错', focus: '剪枝方法特点', explanation: '恰恰相反：后剪枝效果好但计算量大（速度慢）；先剪枝速度快但可能剪枝过早（效果可能较差）。' },
      { type: 'judge', question: '分类误差对不纯度的变化不够敏感。', answer: '对', focus: '分类误差特点', explanation: '分类误差=1-最大类别占比。当分布从8:2变为9:1时，Gini和熵都有明显变化，但分类误差变化很小（从0.2变为0.1），不够敏感。' },
      { type: 'fill', question: '10个样本中5个属于A类、5个属于B类，其熵值为____。', answer: '1', alternatives: ['1.0', '一'], focus: '熵的计算', explanation: '熵=-(0.5×log₂0.5 + 0.5×log₂0.5)=-(0.5×(-1)+0.5×(-1))=1。当两类各占一半时，熵达到最大值1。' },
      { type: 'fill', question: '10个样本中9个买电脑、1个不买，其Gini系数为____。', answer: '0.18', alternatives: ['0.18'], focus: 'Gini系数计算', explanation: 'Gini=1-(0.9)²-(0.1)²=1-0.81-0.01=0.18。Gini系数越小表示不纯度越低。' },
      { type: 'fill', question: '贝叶斯定理公式为P(C|X)=P(X|C)×P(C)/____。', answer: 'P(X)', alternatives: ['P(X)'], focus: '贝叶斯定理', explanation: '贝叶斯定理：P(C|X) = P(X|C)×P(C)/P(X)，其中P(C)是先验概率，P(X|C)是似然，P(C|X)是后验概率，P(X)是证据因子。' },
      { type: 'essay', question: '请比较决策树的四种不纯度度量标准（信息增益、信息增益率、Gini系数、分类误差）的思路、选择标准和特点。', answer: '1. 信息增益(InfoGain)：\n- 思路：用某属性划分后熵降低了多少\n- 选择标准：越大越好\n- 特点：偏向选择取值多的属性\n\n2. 信息增益率(GainRatio)：\n- 思路：在信息增益基础上惩罚分支太多的属性\n- 选择标准：越大越好\n- 公式：增益率=信息增益÷分裂信息\n- 特点：修正了信息增益的缺陷\n\n3. Gini系数：\n- 思路：随机抽两个样本属于不同类别的概率\n- 选择标准：越小越好\n- 公式：Gini=1-Σ(pi²)\n- 特点：计算比熵快，CART决策树在用\n\n4. 分类误差：\n- 思路：猜错的比例\n- 选择标准：越小越好\n- 公式：1-最大类别概率\n- 特点：简单直观但对不纯度变化不够敏感', focus: '不纯度度量对比' },
      { type: 'essay', question: '请描述分类的完整过程，并说明训练集和测试集各自的作用。', answer: '分类的完整过程：\n1. 选择训练数据集：训练样本需包含属性值和类别标记，形式为(V1,V2,...,Vn;C)，用于构建分类模型。\n2. 选择测试数据集：用于评估模型准确率。可将数据划分后一部分作为测试集，也可通过交叉验证（互换/轮换）选择最优模型。\n3. 建立模型（训练）：由训练数据集生成分类模型。\n4. 测试评估：使用测试数据集评估模型，根据误差进行修正（如剪枝）。\n5. 应用模型：对未知分类的样本数据进行分类判别。\n\n训练集的作用：提供带标签的数据用于学习分类规则，建立分类模型。\n测试集的作用：独立评估模型的泛化能力和准确率，检测过拟合，指导模型调优。', focus: '分类过程' }
    ]
  },
  {
    title: '第7章测试',
    questions: [
      { type: 'choice', question: '聚类分析的优化目标是？', options: ['簇间最小化、簇内最大化', '簇间最大化、簇内最小化', '所有簇的大小相等', '簇的数量最少'], answer: 'B', focus: '聚类优化目标', explanation: '聚类的优化目标是簇间最大化（簇与簇之间差异大）和簇内最小化（簇内对象相似度高），即"物以类聚"。' },
      { type: 'choice', question: '聚类与分类的最核心区别是？', options: ['聚类处理数值数据，分类处理类别数据', '聚类是无监督学习，分类是有监督学习', '聚类速度更快', '聚类只能处理小数据集'], answer: 'B', focus: '聚类与分类区别', explanation: '聚类是无监督学习（数据没有标签，自己摸索规律），分类是有监督学习（训练数据带正确答案，有老师教）。' },
      { type: 'choice', question: 'K-Means算法的三大经典挑战不包括？', options: ['K值难以预设', '初始质心随机选择导致结果不稳定', '对噪声和异常值极度敏感', '不能处理离散型数据'], answer: 'D', focus: 'K-Means三大挑战', explanation: 'K-Means的三大经典挑战是：(1)K值难以预设；(2)初始质心随机选择导致结果不稳定；(3)对噪声和异常值极度敏感。"不能处理离散型数据"不是三大挑战之一。' },
      { type: 'choice', question: '余弦相似度主要适用于什么场景？', options: ['连续数值数据的距离计算', '网格状路径规划', '文本相似度、高维稀疏数据', '时间序列分析'], answer: 'C', focus: '余弦相似度适用场景', explanation: '余弦相似度忽略向量绝对长度，只关注向量间的夹角大小，衡量"步调与结构是否一致"。特别适合文本相似度、高维稀疏数据（如TF-IDF向量）。' },
      { type: 'choice', question: 'K-Medoids算法相比K-Means的核心改进是？', options: ['使用更多的簇', '质心从实际样本点中选取，改善了对噪声敏感的问题', '使用欧氏距离', '减少了迭代次数'], answer: 'B', focus: 'K-Medoids改进', explanation: 'K-Medoids从样本点中选取中心点（medoid）作为质心，而非使用均值，因此不受极端值影响，改善了对噪声敏感的问题。' },
      { type: 'choice', question: '使用欧氏距离时，使SSE达到理论最小值的质心选择是？', options: ['中位数', '均值', '众数', '随机点'], answer: 'B', focus: 'SSE最优质心', explanation: '使用欧氏距离时，唯一选择均值作为质心，才能使SSE（误差平方和）达到理论最小值。' },
      { type: 'multichoice', question: 'K-Means算法的迭代终止条件包括哪些？（多选）', options: ['质心不再变化', 'SSE不再变优', '质心变化距离小于ε', '所有点都被分配到簇中'], answer: ['A', 'B', 'C'], focus: 'K-Means终止条件', explanation: 'K-Means的迭代终止条件：质心不再变化、SSE不再变优、质心变化距离<ε、达到最大迭代次数。"所有点都被分配到簇中"是每次迭代的必然结果，不是终止条件。' },
      { type: 'multichoice', question: '以下哪些属于K-Means的特点与局限？（多选）', options: ['对K值敏感', '不能处理非球形簇', '不能处理不同密度的簇', '对离群点不敏感', '计算开销大'], answer: ['A', 'B', 'C', 'E'], focus: 'K-Means局限', explanation: 'K-Means的局限：对K值敏感、对离群点敏感（不是不敏感）、不能处理非球形簇、不能处理不同尺寸和不同密度的簇、计算开销大。' },
      { type: 'multichoice', question: '以下哪些是按分类方法划分的聚类类型？（多选）', options: ['划分聚类', '层次聚类', '互斥聚类', '基于密度的聚类', '模糊聚类'], answer: ['A', 'B', 'D'], focus: '聚类算法分类', explanation: '按分类方法划分：划分聚类（K-Means等）、层次聚类（CURE、BIRCH等）、基于密度的聚类（DBSCAN）、基于网络的聚类（WaveCluster）。互斥聚类和模糊聚类是按划分方法/划分范围分类的。' },
      { type: 'multichoice', question: '应对K-Means初始质心选择问题的方法有哪些？（多选）', options: ['K-Means++思想（离散质心优化法）', '多次运行取最优', '层次聚类法先提取质心', '增加K值'], answer: ['A', 'B', 'C'], focus: '初始质心选择方法', explanation: '初始质心选择方法：K-Means++（选择离已有质心较远的点）、最小SSE法（多次运行选最小SSE）、层次聚类法（先用层次聚类提取质心）、离散质心法。增加K值不能解决初始质心选择问题。' },
      { type: 'judge', question: 'K-Means算法中每个数据元素可以属于多个簇。', answer: '错', focus: 'K-Means分配规则', explanation: 'K-Means要求每个数据元素属于且仅属于一个分组（互斥聚类），不是模糊聚类或非互斥聚类。' },
      { type: 'judge', question: '曼哈顿距离是各维度绝对差之和，适用于网格状路径。', answer: '对', focus: '曼哈顿距离', explanation: '曼哈顿距离d=Σ|xi-yi|，像出租车在城市网格状街道中行驶，不能穿墙，必须沿横平竖直的轴向线段走。' },
      { type: 'judge', question: 'K-Medoids的时间复杂度比K-Means低。', answer: '错', focus: 'K-Medoids复杂度', explanation: 'K-Medoids的时间复杂度比K-Means更高，因为需要从样本点中遍历寻找使绝对误差和最小的最优中心点。' },
      { type: 'judge', question: 'SSE越小，质心是簇中点的更好代表。', answer: '对', focus: 'SSE含义', explanation: 'SSE（误差平方和）衡量聚类质量，SSE越小意味着簇内各点到质心的距离越小，质心对簇中点的代表性越好。' },
      { type: 'judge', question: '余弦相似度会考虑向量的绝对长度（数值大小）。', answer: '错', focus: '余弦相似度特点', explanation: '余弦相似度完全忽略向量的绝对长度（数值大小），只关注两个向量在空间中的夹角大小，衡量"步调与结构是否一致"。' },
      { type: 'fill', question: 'K-Medoids使用____作为紧凑度度量，而K-Means使用SSE（误差平方和）。', answer: '绝对误差和', alternatives: ['绝对误差之和'], focus: 'K-Medoids度量', explanation: 'K-Medoids使用绝对误差和作为紧凑度度量，而K-Means使用SSE（误差平方和）。' },
      { type: 'fill', question: '欧几里得距离的计算公式中，两点(x1,y1)和(x2,y2)的距离d=√((x1-x2)²+____)。', answer: '(y1-y2)²', alternatives: ['(y1-y2)^2'], focus: '欧氏距离公式', explanation: '欧几里得距离d=√(Σ(xi-yi)²)，对于二维空间中两点(x1,y1)和(x2,y2)，d=√((x1-x2)²+(y1-y2)²)。' },
      { type: 'fill', question: 'DBSCAN属于按分类方法划分的____聚类。', answer: '基于密度的', alternatives: ['密度', '基于密度'], focus: '聚类算法分类', explanation: 'DBSCAN是基于密度的聚类算法，与划分聚类（K-Means）和层次聚类（CURE、BIRCH）并列。' },
      { type: 'essay', question: '请描述K-Means算法的完整步骤，并列举其三大经典挑战及相应的解决方案。', answer: 'K-Means算法步骤：\n1. 选择k个点作为初始质心\n2. 将每个点指派到最近的质心，形成k个簇\n3. 重新计算每个簇的质心（均值）\n4. 重复步骤2-3，直到质心不再变化（或SSE不再变优、达到最大迭代次数）\n\n三大挑战及解决方案：\n1. K值难以预设：结合业务实际需求决定K值，避免纯数学计算与业务脱节。\n2. 初始质心随机选择导致结果不稳定：采用K-Means++思想（选择离已有质心较远的点），或多次运行取SSE最小的结果。\n3. 对噪声和异常值极度敏感：进行严格的前置数据清洗，利用3σ原则提前识别并过滤异常值。', focus: 'K-Means算法与挑战' },
      { type: 'essay', question: '请对比K-Means和K-Medoids算法，包括质心计算、噪声敏感性、紧凑度度量、时间复杂度等方面。', answer: 'K-Means与K-Medoids对比：\n1. 质心计算：K-Means使用均值（mean）作为质心，可以是空间中任意点；K-Medoids从样本点中选取中心点（medoid），必须是实际存在的样本点。\n2. 噪声敏感性：K-Means对噪声敏感，因为均值容易被极端值拉偏；K-Medoids不敏感，因为中心点是实际样本点，不受极端值影响。\n3. 紧凑度度量：K-Means使用SSE（误差平方和）；K-Medoids使用绝对误差和。\n4. 时间复杂度：K-Means较低；K-Medoids较高（需遍历样本点找最优中心点）。\n5. 核心思想：K-Means每次迭代重新计算均值质心；K-Medoids每次迭代从样本中选使绝对误差和最小的点作为新质心。', focus: 'K-Means与K-Medoids对比' }
    ]
  },
  {
    title: '第8章测试',
    questions: [
      { type: 'choice', question: '过拟合的典型表现是什么？', options: ['训练误差和检验误差都很低', '训练误差很低但检验误差很高', '训练误差很高但检验误差很低', '训练误差和检验误差都很高'], answer: 'B', focus: '过拟合表现', explanation: '过拟合的典型表现是训练误差很低（甚至为0），但检验误差很高。模型过度拟合了训练数据的噪声，导致对新数据的泛化能力差。' },
      { type: 'choice', question: '在CRISP-DM模型中，模型评估之后的步骤是？', options: ['数据准备', '建模', '结果发布', '数据理解'], answer: 'C', focus: 'CRISP-DM流程', explanation: 'CRISP-DM的六大步骤：商业理解→数据理解→数据准备→建模→模型评估→结果发布。模型评估之后是结果发布。' },
      { type: 'choice', question: '以下哪个不属于K-Means算法的局限？', options: ['不能处理非球形簇', '不能处理不同密度的簇', '不需要预设簇数', '对离群点敏感'], answer: 'C', focus: 'K-Means局限', explanation: 'K-Means必须预设K值（簇数），这是它的一大挑战而非局限中的"不需要"。其他选项（不能处理非球形簇、不同密度簇、对离群点敏感）都是K-Means的已知局限。' },
      { type: 'choice', question: '决策树过拟合的原因中，"噪声"导致的问题是？', options: ['训练数据不足', '决策边界改变', '计算量过大', '属性选择不当'], answer: 'B', focus: '过拟合原因', explanation: '噪声导致决策边界改变，使决策树拟合了训练数据中的噪声模式，而非真实的分类规律，从而导致过拟合。' },
      { type: 'choice', question: '在数据挖掘全流程中，数据准备的重要性体现在"垃圾进，垃圾出"原则中，这意味着？', options: ['算法越先进结果越好', '数据质量对最终结果起决定性作用', '数据量越大越好', '模型越复杂越好'], answer: 'B', focus: '数据准备重要性', explanation: '"垃圾进，垃圾出"(Garbage In, Garbage Out)意味着如果输入数据质量差，无论后续算法多先进，结果都会很差。数据质量对最终结果起决定性作用。' },
      { type: 'choice', question: '关联规则{避雷针}→{大米}的置信度高达90%，但两者实际毫无关联，这种问题可以通过什么指标来识别？', options: ['支持度', '置信度', '提升度(Lift)', '候选项集数量'], answer: 'C', focus: '虚假规则识别', explanation: '提升度Lift可以识别这种"虚假高置信度规则"。由于大米是超级热门商品（90%的人都买），避雷针和大米无关联但置信度高。提升度会揭示两者实际是独立的（Lift≈1）。' },
      { type: 'multichoice', question: '以下哪些方法可以用于缓解过拟合问题？（多选）', options: ['决策树剪枝', '增加训练数据量', '交叉验证', '使用更复杂的模型'], answer: ['A', 'B', 'C'], focus: '缓解过拟合方法', explanation: '缓解过拟合的方法包括：决策树剪枝（先剪枝或后剪枝）、增加训练数据量（更多代表性样本）、交叉验证（选择最优模型）。使用更复杂的模型反而会加剧过拟合。' },
      { type: 'multichoice', question: '以下哪些是数据挖掘中常用的模型评价方法？（多选）', options: ['交叉验证', '混淆矩阵', 'SSE（误差平方和）', '支持度和置信度'], answer: ['A', 'B', 'C', 'D'], focus: '模型评价方法', explanation: '常用评价方法：交叉验证（评估分类模型泛化能力）、混淆矩阵（分类准确率分析）、SSE（聚类质量度量）、支持度和置信度（关联规则强度度量）。不同任务使用不同的评价指标。' },
      { type: 'multichoice', question: '以下关于数据预处理的说法，正确的有哪些？（多选）', options: ['数据准备往往占据数据挖掘项目的大部分时间', '3σ原则可用于异常值检测', '归一化和标准化是常用的数据变换方法', '数据预处理对最终结果影响不大'], answer: ['A', 'B', 'C'], focus: '数据预处理重要性', explanation: '数据准备确实占据大部分时间，3σ原则是经典的异常值检测方法，归一化和标准化是常用的变换方法。数据预处理对最终结果有决定性影响，不是"影响不大"。' },
      { type: 'multichoice', question: '以下哪些算法属于有监督学习方法？（多选）', options: ['决策树分类', 'K-Means聚类', '朴素贝叶斯分类', 'DBSCAN聚类'], answer: ['A', 'C'], focus: '有监督vs无监督', explanation: '决策树分类和朴素贝叶斯分类是有监督学习（需要带标签的训练数据）。K-Means聚类和DBSCAN聚类是无监督学习（不需要标签）。' },
      { type: 'judge', question: '后剪枝的效果通常优于先剪枝，但计算量更大。', answer: '对', focus: '剪枝方法对比', explanation: '后剪枝先让树完整生长再修剪，效果较好但计算量大。先剪枝在生长过程中提前停止，速度快但可能过早剪枝。' },
      { type: 'judge', question: '数据挖掘只需要关注算法的选择，数据准备环节可以忽略。', answer: '错', focus: '数据准备重要性', explanation: '数据准备在数据挖掘中具有决定性地位，数据的质量、表现形式和代表性对算法选择、参数选取和最终结果起着决定性的作用。"垃圾进，垃圾出"。' },
      { type: 'judge', question: 'K-Means++的核心思想是让初始质心在特征空间中充分散开。', answer: '对', focus: 'K-Means++思想', explanation: 'K-Means++在确定第一个初始质心后，后续的初始质心选择倾向于选择离已有质心距离较远的点，从而保证初始质心在整个特征空间中充分散开。' },
      { type: 'judge', question: '信息增益和信息增益率在选择属性时总会得到完全相同的结果。', answer: '错', focus: '信息增益vs增益率', explanation: '信息增益率通过除以分裂信息来惩罚取值多的属性，因此当属性取值数不同时，两者结果会不同。信息增益偏向取值多的属性，信息增益率会修正这种偏向。' },
      { type: 'judge', question: '聚类分析是一种有监督学习方法。', answer: '错', focus: '聚类学习类型', explanation: '聚类分析是无监督学习方法，数据没有标签，算法自动发现数据中自然的分组。有监督学习需要带标签的训练数据，如分类。' },
      { type: 'fill', question: '在支持度-置信度框架中，提升度Lift>____表示前件与后件之间存在正相关关系。', answer: '1', alternatives: ['1.0', '一'], focus: '提升度判断', explanation: '提升度Lift=1表示独立，<1表示负相关（互斥），>1表示正相关（有效强关联）。' },
      { type: 'fill', question: '过拟合的表现是训练误差很低，但____误差很高。', answer: '检验', alternatives: ['测试', '泛化', '验证'], focus: '过拟合表现', explanation: '过拟合时模型在训练集上表现很好（训练误差低），但对新数据的预测能力差（检验/测试误差高），说明模型泛化能力不足。' },
      { type: 'fill', question: '在KDD流程中，数据挖掘只是其中的核心步骤，完整流程还包括数据清洗、预处理、变换和____。', answer: '评价', alternatives: ['模式评价', '评估', '知识评价'], focus: 'KDD完整流程', explanation: 'KDD完整流程：数据清洗→预处理→变换→数据挖掘→评价。数据挖掘只是核心步骤，前后还需要数据准备和模式评价环节。' },
      { type: 'essay', question: '请综合阐述数据挖掘的预测任务和描述任务的区别，并各举两个典型算法或方法。', answer: '预测任务（Predictive Tasks）：\n- 核心目标：根据某些属性（输入变量）的值，去预测另一个特定属性（目标变量）的值。\n- 典型方法：\n  1. 分类（Classification）：如决策树、朴素贝叶斯——预测离散类别标签\n  2. 回归（Regression）：预测连续数值\n\n描述任务（Descriptive Tasks）：\n- 核心目标：不需要预测特定目标变量，而是总结、概括或发现数据中潜在的模式、联系和规律。\n- 典型方法：\n  1. 聚类（Clustering）：如K-Means、DBSCAN——发现数据中的自然分组\n  2. 关联规则发现（Association Rule Discovery）：如Apriori、FP-Growth——发现项集之间的关联\n  3. 异常检测：发现数据中的异常模式\n\n核心区别：预测任务有明确的目标变量，描述任务没有目标变量，旨在发现数据的内在结构。', focus: '预测任务与描述任务' },
      { type: 'essay', question: '请论述在整个数据挖掘过程中，数据准备为什么是最重要的环节？请从多个角度进行阐述。', answer: '数据准备（Data Preparation）是数据挖掘中最重要的环节，原因如下：\n\n1. 决定性地位：数据的质量、表现形式和代表性对算法选择、参数选取和最终结果起决定性作用——"垃圾进，垃圾出"。\n\n2. 耗时最长：在狭义数据挖掘三阶段中，数据准备往往占据大部分时间，包含数据清洗、特征工程、变量选择等。\n\n3. 三大过程模型都离不开数据准备：CRISP-DM（数据准备）、SEMMA（抽样+预处理）、5A（存取数据），数据准备是建模前的必经环节。\n\n4. KDD流程的第一道实质性工序：数据清洗和预处理是整个知识发现流程的起点和基础。\n\n5. 所有挖掘任务都依赖数据准备：分类/回归需要干净一致的训练集；聚类需要剔除异常值（否则质心被拉偏）；关联规则中噪声会产生虚假规则。\n\n6. 数据准备的环节贯穿全流程：从收集→抽样→集成→清理→规约→变换，每一环都在将"脏数据"转化为"干净数据"。', focus: '数据准备重要性' }
    ]
  }
];

// ─── 3. examQuizzes ──────────────────────────────────────────
const examQuizzes = [
  // Exam 1
  {
    title: '数据挖掘模拟真题一',
    questions: [
      // Choice (20)
      { type: 'choice', question: '在关联规则分析中，支持度用于衡量？', options: ['模型参数更新速度', '项集在事务数据库中出现的频繁程度', '包含A条件下同时包含B的条件概率', '两个项集的距离'], answer: 'B', focus: '支持度', explanation: '支持度衡量项集在全部事务中出现的频率。' },
      { type: 'choice', question: 'Bagging方法通常有助于？', options: ['增加基学习器相关性', '使所有基学习器在同一训练集上独立训练', '保证不过拟合', '降低模型方差提高预测稳定性'], answer: 'D', focus: 'Bagging', explanation: 'Bagging通过多个模型的投票/平均来降低方差。' },
      { type: 'choice', question: '对无序类别变量编码时通常应采用？', options: ['One-Hot编码', '整数编码', '目标编码', '频率编码'], answer: 'A', focus: '数据编码', explanation: 'One-Hot编码不会引入虚假的顺序关系。' },
      { type: 'choice', question: '交叉熵损失函数通常用于衡量？', options: ['预测类别标签与真实类别的偏离程度', '不同类别的间隔大小', '模型参数更新前后的变化幅度', '预测类别概率与真实类别分布之间的差异'], answer: 'D', focus: '损失函数', explanation: '交叉熵衡量两个概率分布之间的差异。' },
      { type: 'choice', question: '决策树处理连续型特征时通常会？', options: ['将连续特征视为无序类别', '删除连续特征', '根据划分准则选择合适阈值', '要求正态分布'], answer: 'C', focus: '决策树', explanation: '决策树对连续特征寻找最优划分阈值。' },
      { type: 'choice', question: '反向传播算法的主要作用是？', options: ['计算损失函数关于网络参数的梯度', '将误差平均分配', '计算样本相似度', '自动生成训练样本'], answer: 'A', focus: '神经网络', explanation: '反向传播通过链式法则计算各参数的梯度。' },
      { type: 'choice', question: 'PCA属于数据预处理的哪种技术？', options: ['数据集成', '数据变换', '数据规约', '数据清洗'], answer: 'C', focus: 'PCA', explanation: 'PCA通过降维实现数据规约。' },
      { type: 'choice', question: 'KNN使用欧氏距离时若量纲差异大通常需要？', options: ['根据类别标签调整', '转换为类别特征', '增大K值', '归一化或标准化处理'], answer: 'D', focus: 'KNN', explanation: '标准化可消除不同量纲对距离计算的影响。' },
      { type: 'choice', question: '同时兼顾准确率和召回率时常用？', options: ['准确率', '假阳性率', 'F1值', '均方误差'], answer: 'C', focus: 'F1值', explanation: 'F1是精确率和召回率的调和平均，综合二者。' },
      { type: 'choice', question: '随机森林构建每棵树时通常会？', options: ['使用全部样本和全部特征', '只使用一个固定特征', '对样本和特征进行随机选择', '要求所有树结构相同'], answer: 'C', focus: '随机森林', explanation: '随机森林对样本和特征都进行随机选择以增加多样性。' },
      { type: 'choice', question: '线性回归通常用什么方法估计参数？', options: ['网格搜索', '最大似然估计', '梯度裁剪', '最小二乘法'], answer: 'D', focus: '线性回归', explanation: '最小二乘法是线性回归最经典的参数估计方法。' },
      { type: 'choice', question: '下列指标中主要用于分类模型性能评估的是？', options: ['召回率', '众数', '均值', '中位数'], answer: 'A', focus: '分类评价', explanation: '召回率是分类模型的评价指标。' },
      { type: 'choice', question: '学习率设置过大可能导致？', options: ['参数更新步长过大损失函数难以稳定收敛', '参数更新步长过小训练变慢', '损失函数自动变为凸函数', '参数保持初始值'], answer: 'A', focus: '学习率', explanation: '学习率过大会导致参数跳跃式更新，难以收敛。' },
      { type: 'choice', question: '线性可分时SVM的核心思想是寻找？', options: ['分类间隔最大的超平面', '支持向量最多的超平面', '使样本远离类别中心的超平面', '平均距离最小的超平面'], answer: 'A', focus: 'SVM', explanation: 'SVM寻找最大间隔超平面以获得最好的泛化能力。' },
      { type: 'choice', question: '岭回归中L2正则项主要是为了？', options: ['增大模型复杂度', '改变样本标签', '限制模型参数过大', '删除离群点'], answer: 'C', focus: '正则化', explanation: 'L2正则化限制参数大小，防止过拟合。' },
      { type: 'choice', question: '神经网络隐藏层的主要作用通常是？', options: ['自动选择最优层数', '保证不过拟合', '自动挖掘非线性特征表示', '保证训练速度快'], answer: 'C', focus: '神经网络', explanation: '隐藏层通过非线性激活函数自动学习特征表示。' },
      { type: 'choice', question: '支持向量通常指？', options: ['远离分类边界的样本', '距离分类超平面最近并决定间隔的样本', '被误分类的全部样本', '标签缺失的样本'], answer: 'B', focus: 'SVM', explanation: '支持向量是距离超平面最近的样本，决定了分类间隔。' },
      { type: 'choice', question: '关于神经网络训练的正确说法是？', options: ['训练目标通常是最小化损失函数', '学习率越大效果越好', '隐藏层越多一定不会过拟合', '不需要样本数据'], answer: 'A', focus: '神经网络', explanation: '训练神经网络的目标是最小化损失函数。' },
      { type: 'choice', question: 'SVM中核函数处理非线性问题的主要作用是？', options: ['将问题转化到更适合分类的特征空间', '自动删除异常样本', '减少训练样本数量', '自动生成标签'], answer: 'A', focus: 'SVM', explanation: '核函数将数据映射到高维空间使非线性问题线性可分。' },
      { type: 'choice', question: 'KNN被称为惰性学习算法主要是因为？', options: ['预测阶段不计算距离', '训练阶段通过迭代得到参数', '必须先假设线性关系', '训练阶段主要保存样本预测时再根据邻近样本判断'], answer: 'D', focus: 'KNN', explanation: 'KNN不在训练阶段建立显式模型，预测时才计算距离。' },
      // Fill (10)
      { type: 'fill', question: 'CART分类树常用的划分指标是____', answer: '基尼指数', focus: '决策树', explanation: 'CART分类树使用基尼指数（Gini Index）作为划分标准。', alternatives: ['Gini指数', '基尼指数', 'gini指数'] },
      { type: 'fill', question: '用于度量预测结果与真实结果差异的函数称为____', answer: '损失函数', focus: '损失函数', explanation: '损失函数量化模型预测与真实值之间的差距。' },
      { type: 'fill', question: '数据从输入层经过隐藏层到输出层计算预测结果的过程称为____', answer: '前向传播', focus: '神经网络', explanation: '前向传播是数据从输入到输出的计算过程。' },
      { type: 'fill', question: '满足最小支持度要求的项集称为____', answer: '频繁项集', focus: '关联分析', explanation: '频繁项集是支持度不小于最小支持度的项集。' },
      { type: 'fill', question: '将来自不同数据源的数据合并到统一数据存储中的过程称为____', answer: '数据集成', focus: '数据集成', explanation: '数据集成将多源数据合并到统一存储中。' },
      { type: 'fill', question: '实际为正例但被模型预测为负例的样本称为____', answer: '假负例', focus: '混淆矩阵', explanation: '假负例(FN)是实际为正但被错误预测为负的样本。', alternatives: ['FN', 'fn'] },
      { type: 'fill', question: '通过对训练集进行有放回抽样构造多个子训练集的方法称为____', answer: '自助采样', focus: 'Bagging', explanation: '自助采样(Bootstrap)是有放回的随机抽样方法。', alternatives: ['Bootstrap采样', 'Bootstrap', 'bootstrap'] },
      { type: 'fill', question: '线性回归中估计模型参数的常见方法是____', answer: '最小二乘法', focus: '线性回归', explanation: '最小二乘法通过最小化残差平方和估计参数。' },
      { type: 'fill', question: '根据梯度方向逐步调整参数的优化方法称为____', answer: '随机梯度下降', focus: '优化方法', explanation: '梯度下降沿梯度反方向更新参数以最小化损失。', alternatives: ['SGD', '梯度下降', 'sgd'] },
      { type: 'fill', question: '多个模型对同一样本进行类别投票确定最终结果的方法称为____', answer: '投票法', focus: '集成学习', explanation: '投票法是集成学习中常用的组合策略。', alternatives: ['多数投票'] },
      // Judge (10)
      { type: 'judge', question: '逻辑回归通常用于回归任务', answer: '错', focus: '逻辑回归', explanation: '逻辑回归虽然名字带回归，但主要用于分类任务。' },
      { type: 'judge', question: '聚类算法不依赖事先给定的类别标签，根据样本相似性自动划分', answer: '对', focus: '聚类', explanation: '聚类是无监督学习，不需要预先标签。' },
      { type: 'judge', question: '回归和分类都需要已知标签数据进行训练，都属于有监督学习', answer: '对', focus: '有监督学习', explanation: '分类和回归都需要带标签的训练数据。' },
      { type: 'judge', question: '频繁项集一定都满足强关联规则', answer: '错', focus: '关联分析', explanation: '频繁项集只要求满足最小支持度，强关联规则还要满足最小置信度。' },
      { type: 'judge', question: 'Z-score标准化会把所有特征值缩放到[0,1]区间', answer: '错', focus: '标准化', explanation: 'Z-score变为均值0标准差1，Min-Max才缩放到[0,1]。' },
      { type: 'judge', question: '数据预处理的目的之一是提高数据质量，提升模型训练效果', answer: '对', focus: '数据预处理', explanation: '高质量数据是模型效果的基础保障。' },
      { type: 'judge', question: '训练集准确率高而测试集准确率低通常是欠拟合', answer: '错', focus: '过拟合', explanation: '训练好测试差是过拟合的典型表现，不是欠拟合。' },
      { type: 'judge', question: '皮尔逊相关系数只能衡量变量间的线性相关性', answer: '对', focus: '相关性', explanation: 'Pearson相关系数专门衡量线性相关关系。' },
      { type: 'judge', question: 'K-means聚类结果可能受初始聚类中心影响', answer: '对', focus: 'K-means', explanation: '不同初始中心可能导致不同的聚类结果。' },
      { type: 'judge', question: '召回率越高说明模型将正类样本识别出来的能力越强', answer: '对', focus: '召回率', explanation: '召回率=TP/(TP+FN)，越高说明找回的正例越多。' },
      // Essay (3)
      { type: 'essay', question: '简述K-means聚类算法的基本思想及主要步骤，并说明优点和局限性', answer: '思想-步骤-优点-局限', focus: 'K-means综合', explanation: '需全面回答K-means的思想、步骤（选初始质心→分配→更新→迭代）、优点（简单高效）和局限（需预设K、对初始值敏感、不适合非球形簇）。', alternatives: [] },
      { type: 'essay', question: '什么是数据挖掘？使用数据挖掘发现知识的过程包括哪些重要步骤？', answer: '定义+步骤', focus: '数据挖掘综合', explanation: '数据挖掘是从大量数据中发现潜在有用知识的过程。步骤包括数据准备（集成、选择、预处理、转换）、数据挖掘（选用算法建模）、解释评估。', alternatives: [] },
      { type: 'essay', question: '数据预处理在数据挖掘中所处的地位和所发挥的作用', answer: '地位+作用', focus: '数据预处理', explanation: '数据预处理是数据挖掘的基础环节，占大量工作量。作用：提高数据质量、消除噪声和冗余、统一数据格式、提高模型训练效果。', alternatives: [] }
    ]
  },
  // Exam 2
  {
    title: '数据挖掘期末模拟真题二',
    questions: [
      // Choice (20)
      { type: 'choice', question: '数据挖掘与传统数据分析相比更强调？', options: ['人工报表', '从大量复杂数据中自动发现潜在规律', '只计算平均数和方差', '只处理小规模结构化数据'], answer: 'B', focus: '数据挖掘定义', explanation: '数据挖掘的核心是自动发现潜在规律。' },
      { type: 'choice', question: 'OLAP中的"钻取"通常指？', options: ['从细粒度汇总到粗粒度', '改变维度显示方向', '从汇总层逐步查看更细层次数据', '删除异常数据'], answer: 'C', focus: 'OLAP操作', explanation: '钻取是从粗到细查看数据层次。' },
      { type: 'choice', question: '下列属于数据清洗任务的是？', options: ['PCA降维', '处理缺失值和异常值', '使用K-means聚类', '计算分类准确率'], answer: 'B', focus: '数据清洗', explanation: '处理缺失值和异常值是数据清洗的核心任务。' },
      { type: 'choice', question: '把连续年龄划分为青年中年老年属于？', options: ['离散化', '数据集成', '模型评价', '反向传播'], answer: 'A', focus: '离散化', explanation: '将连续属性划分为有限类别是离散化。' },
      { type: 'choice', question: 'Min-Max归一化的主要作用是？', options: ['转为均值0方差1', '把数据缩放到指定区间', '删除重复记录', '生成关联规则'], answer: 'B', focus: '归一化', explanation: 'Min-Max将数据线性缩放到指定区间（通常[0,1]）。' },
      { type: 'choice', question: '关联规则A=>B的置信度表示？', options: ['A和B同时出现占全部事务的比例', '包含A的事务中也包含B的比例', 'B出现的总次数', 'A和B之间的欧氏距离'], answer: 'B', focus: '置信度', explanation: '置信度=P(B|A)，条件概率。' },
      { type: 'choice', question: 'Apriori算法能够剪枝的理论基础是？', options: ['最大间隔原理', '频繁项集的子集必频繁', '梯度下降法', '贝叶斯公式'], answer: 'B', focus: 'Apriori', explanation: '反过来说，非频繁项集的超集必非频繁，据此剪枝。' },
      { type: 'choice', question: 'CART分类树常用的划分指标是？', options: ['基尼指数', '均方误差', '曼哈顿距离', '召回率'], answer: 'A', focus: '决策树', explanation: 'CART分类树使用基尼指数。' },
      { type: 'choice', question: 'KNN对特征量纲敏感是因为它主要依赖？', options: ['概率分布', '距离计算', '树结构剪枝', '核函数映射'], answer: 'B', focus: 'KNN', explanation: 'KNN依赖距离计算，量纲差异会影响距离。' },
      { type: 'choice', question: '逻辑回归通常用于？', options: ['聚类任务', '分类任务', '关联规则挖掘', '数据压缩'], answer: 'B', focus: '逻辑回归', explanation: '逻辑回归主要用于分类。' },
      { type: 'choice', question: 'SVM在线性可分情况下寻找的是？', options: ['方差最大的主成分', '支持度最高的项集', '分类间隔最大的超平面', '距离最近的K个样本'], answer: 'C', focus: 'SVM', explanation: 'SVM寻找最大间隔超平面。' },
      { type: 'choice', question: '神经网络中反向传播的主要作用是？', options: ['计算参数梯度', '生成训练标签', '删除异常值', '进行数据集成'], answer: 'A', focus: '神经网络', explanation: '反向传播计算损失函数关于参数的梯度。' },
      { type: 'choice', question: 'L2正则化的主要作用是？', options: ['扩大参数值', '限制参数过大缓解过拟合', '把连续变量离散化', '提高训练集记忆能力'], answer: 'B', focus: '正则化', explanation: 'L2正则化限制参数大小，缓解过拟合。' },
      { type: 'choice', question: 'PCA主要用于？', options: ['降维和数据规约', '生成分类标签', '计算置信度', '有放回抽样'], answer: 'A', focus: 'PCA', explanation: 'PCA是降维和数据规约的经典方法。' },
      { type: 'choice', question: 'K-means聚类结果可能受什么影响？', options: ['初始聚类中心', '样本标签名称', '网页编码', '分类阈值固定为0.5'], answer: 'A', focus: 'K-means', explanation: '初始聚类中心的选择影响最终聚类结果。' },
      { type: 'choice', question: 'DBSCAN相比K-means的一个特点是？', options: ['必须指定簇数K', '只能发现球状簇', '能识别噪声点并发现任意形状簇', '只能用于回归'], answer: 'C', focus: 'DBSCAN', explanation: 'DBSCAN可发现任意形状簇并识别噪声点。' },
      { type: 'choice', question: '训练集准确率高而测试集准确率低通常说明？', options: ['欠拟合', '过拟合', '数据集成', '无监督学习'], answer: 'B', focus: '过拟合', explanation: '训练好测试差是过拟合的典型表现。' },
      { type: 'choice', question: 'F1值综合考虑的是？', options: ['支持度和置信度', '精确率和召回率', '均值和方差', '欧氏距离和曼哈顿距离'], answer: 'B', focus: 'F1值', explanation: 'F1是精确率和召回率的调和平均。' },
      { type: 'choice', question: 'Bagging通过多个模型投票或平均主要用于降低？', options: ['模型方差', '样本数量', '数据维度', '标签个数'], answer: 'A', focus: 'Bagging', explanation: 'Bagging通过集成降低模型方差。' },
      { type: 'choice', question: '数据预处理在数据挖掘流程中的地位是？', options: ['可有可无', '只在模型评价后进行', '建模前提高数据质量的基础环节', '只用于画图'], answer: 'C', focus: '数据预处理', explanation: '数据预处理是建模前提高数据质量的基础环节。' },
      // Fill (10)
      { type: 'fill', question: '数据挖掘从大量数据中发现潜在有用的____', answer: '知识', focus: '数据挖掘定义', explanation: '数据挖掘的核心目标是发现知识。' },
      { type: 'fill', question: '数据预处理主要包括清洗、集成、变换和____', answer: '数据规约', focus: '数据预处理', explanation: '四大任务：清洗、集成、变换、规约。', alternatives: ['规约'] },
      { type: 'fill', question: '实际为正例但被预测为负例的样本称为____', answer: '假负例', focus: '混淆矩阵', explanation: '假负例(FN)是实际正被预测为负。', alternatives: ['FN', 'fn'] },
      { type: 'fill', question: '分类评价中____用于衡量实际正类被识别出来的比例', answer: '召回率', focus: '召回率', explanation: '召回率=TP/(TP+FN)。' },
      { type: 'fill', question: 'K-means每轮迭代通常包括样本分配和____两个步骤', answer: '中心更新', focus: 'K-means', explanation: 'K-means迭代包括分配样本到最近质心和更新质心。', alternatives: ['质心更新'] },
      { type: 'fill', question: '关联规则中衡量项集出现频繁程度的指标是____', answer: '支持度', focus: '关联分析', explanation: '支持度衡量项集出现的频率。' },
      { type: 'fill', question: '线性回归常用____估计参数', answer: '最小二乘法', focus: '线性回归', explanation: '最小二乘法是最经典的参数估计方法。' },
      { type: 'fill', question: '从输入到输出计算预测结果的过程称为____', answer: '前向传播', focus: '神经网络', explanation: '前向传播是神经网络的预测计算过程。' },
      { type: 'fill', question: '自助采样的英文常称为____', answer: 'Bootstrap', focus: '集成学习', explanation: 'Bootstrap是有放回的随机抽样方法。', alternatives: ['bootstrap'] },
      { type: 'fill', question: '把连续属性划分为有限区间的过程称为____', answer: '离散化', focus: '数据变换', explanation: '离散化将连续值映射到有限区间。' },
      // Judge (10)
      { type: 'judge', question: '数据分析主要回答"发生了什么、为什么发生"，数据挖掘更强调发现潜在规律和预测', answer: '对', focus: '数据分析与数据挖掘', explanation: '数据分析侧重回顾，数据挖掘侧重预测。' },
      { type: 'judge', question: '聚类算法需要事先给出每个样本的类别标签', answer: '错', focus: '聚类', explanation: '聚类是无监督学习，不需要预先标签。' },
      { type: 'judge', question: 'Z-score标准化会把所有数据缩放到[0,1]', answer: '错', focus: '标准化', explanation: 'Z-score变为均值0标准差1，不是[0,1]。' },
      { type: 'judge', question: '频繁项集只需满足最小支持度，强关联规则还要考虑置信度', answer: '对', focus: '关联分析', explanation: '强关联规则需同时满足最小支持度和最小置信度。' },
      { type: 'judge', question: 'KNN训练阶段通常主要保存训练样本，因此常被称为惰性学习', answer: '对', focus: 'KNN', explanation: 'KNN不在训练阶段建立模型。' },
      { type: 'judge', question: 'SVM中的支持向量通常是远离分类边界、完全不起作用的样本', answer: '错', focus: 'SVM', explanation: '支持向量是距离超平面最近的样本，决定了分类间隔。' },
      { type: 'judge', question: '学习率过大可能导致神经网络训练不稳定甚至发散', answer: '对', focus: '学习率', explanation: '学习率过大会导致参数更新过大。' },
      { type: 'judge', question: 'PCA属于数据规约中的降维方法', answer: '对', focus: 'PCA', explanation: 'PCA通过主成分分析实现降维。' },
      { type: 'judge', question: '训练集和测试集表现都很差通常是过拟合', answer: '错', focus: '欠拟合', explanation: '都差是欠拟合，过拟合是训练好测试差。' },
      { type: 'judge', question: '皮尔逊相关系数主要衡量线性相关关系', answer: '对', focus: '相关性', explanation: 'Pearson相关系数专门衡量线性相关。' },
      // Essay (3)
      { type: 'essay', question: '结合例子说明数据分析与数据挖掘的区别和联系', answer: '区别+联系+例子', focus: '综合', explanation: '数据分析用统计方法处理数据回答已知问题；数据挖掘自动发现隐藏规律预测未来。联系：数据分析是基础，数据挖掘是进阶。例：分析销售报表vs发现购物篮关联规则。', alternatives: [] },
      { type: 'essay', question: '简述数据预处理在数据挖掘中的地位、主要任务和作用', answer: '地位+任务+作用', focus: '数据预处理综合', explanation: '地位：基础环节，占大量工作。任务：清洗、集成、变换、规约。作用：提高数据质量，消除噪声冗余，统一格式，提升模型效果。', alternatives: [] },
      { type: 'essay', question: '说明K-means算法的基本思想、主要步骤、优点和局限性', answer: '思想+步骤+优点+局限', focus: 'K-means综合', explanation: '思想：选K个质心迭代优化。步骤：初始化→分配→更新→迭代。优点：简单高效。局限：需预设K、对初始值敏感、不适合非球形簇。', alternatives: [] }
    ]
  }
];

// ─── 4. outlineHTML ──────────────────────────────────────────
const outlineHTML = `
<div class="outline-content">
  <h2>数据挖掘期末复习大纲</h2>

  <section>
    <h3>第一章 绪论：数据分析与数据挖掘</h3>
    <ul>
      <li><strong>数据分析</strong>：用统计方法处理数据，回答"发生了什么、为什么发生"</li>
      <li><strong>数据挖掘</strong>：从大量、不完全、有噪声、模糊、随机的数据中发现潜在有用的<strong>知识</strong></li>
      <li>数据分析是<strong>基础</strong>，数据挖掘是<strong>进阶</strong></li>
      <li><strong>预测类任务</strong>：分类（离散标签）、回归（连续数值）</li>
      <li><strong>描述类任务</strong>：聚类（自动分组）、关联规则（共现关系）</li>
      <li>预测任务有目标变量（有监督），描述任务无目标变量（无监督）</li>
      <li>例：统计销售额=数据分析；发现"面包→牛奶"=数据挖掘</li>
      <li>易错：聚类是描述类不是预测类；回归预测连续值不是离散标签</li>
    </ul>
  </section>

  <section>
    <h3>第二章 数据挖掘的过程</h3>
    <ul>
      <li><strong>8个能力等级</strong>：
        <ul>
          <li>描述阶段：常规报表→即席查询→OLAP→警报</li>
          <li>挖掘阶段：统计分析→预报→预测型建模→优化</li>
        </ul>
      </li>
      <li><strong>OLAP操作</strong>：切片、切块、钻取（粗→细）、上卷（细→粗）、旋转</li>
      <li><strong>三阶段过程</strong>：数据准备→数据挖掘→解释评估</li>
      <li><strong>SEMMA</strong>：Sample→Explore→Modify→Model→Assess（反馈式）</li>
      <li><strong>CRISP-DM</strong>：商业理解→数据理解→数据准备→建模→评估→发布</li>
      <li><strong>5A</strong>：Assess→Access→Analyze→Act→Automate（强调落地）</li>
      <li>所有模型都强调<strong>反馈和迭代</strong></li>
    </ul>
  </section>

  <section>
    <h3>第三章 数据准备</h3>
    <ul>
      <li>数据准备是<strong>基础环节</strong>，占项目大量工作</li>
      <li><strong>四种抽样方法</strong>：
        <ul>
          <li>简单随机：等概率</li>
          <li>系统抽样：等间隔（周期性有偏差）</li>
          <li>分层抽样：层内同质层间异质（提高精度）</li>
          <li>整群抽样：群内异质群间同质（降低成本）</li>
        </ul>
      </li>
      <li><strong>数据集成</strong>：数据仓库（物理复制，查询快实时差）vs 数据联邦（虚拟视图，实时好）</li>
      <li>集成难点：同名异义、别名、自治性</li>
      <li><strong>异常值检测</strong>：
        <ul>
          <li>3σ原则：[μ-3σ, μ+3σ]</li>
          <li>IQR法：IQR=Q3-Q1，异常值 &lt; Q1-1.5×IQR 或 &gt; Q3+1.5×IQR</li>
        </ul>
      </li>
      <li><strong>数据变换</strong>：
        <ul>
          <li>Min-Max归一化 → [0,1]</li>
          <li>Z-score标准化 → 均值0标准差1</li>
          <li>离散化：连续→有限区间</li>
          <li>PCA降维：主成分含义更模糊</li>
          <li>哈希编码：适合高基数，可能冲突</li>
        </ul>
      </li>
      <li>预处理四大任务：清洗、集成、变换、规约</li>
    </ul>
  </section>

  <section>
    <h3>第四章 数据探索与描述性统计</h3>
    <ul>
      <li><strong>数据探索作用</strong>：了解数据质量、识别模式、为预处理提供依据</li>
      <li><strong>属性类型</strong>：连续型、离散型、标称型（无序类别）、有序型</li>
      <li><strong>集中量数</strong>：
        <ul>
          <li>均值：最易受极端值影响</li>
          <li>截断均值：去掉极端值</li>
          <li>中位数：较稳健</li>
          <li>众数：出现次数最多，可能不唯一</li>
        </ul>
      </li>
      <li><strong>差异量数</strong>：
        <ul>
          <li>极差：最大值-最小值</li>
          <li>方差/标准差</li>
          <li>MAD（中位数绝对偏差）：稳健</li>
          <li>IQR = Q3-Q1：中间50%</li>
        </ul>
      </li>
      <li><strong>相关性量数</strong>：
        <ul>
          <li>协方差：同向正、反向负；Cov(X,X)=Var(X)</li>
          <li>Pearson相关系数：线性相关，[-1,1]</li>
          <li>协方差矩阵：对角线=方差，非对角线=协方差</li>
        </ul>
      </li>
      <li><strong>稳健统计量</strong>：中位数、MAD、IQR</li>
    </ul>
  </section>

  <section>
    <h3>第五章 关联分析</h3>
    <ul>
      <li><strong>核心概念</strong>：项集、支持度计数、候选项集、频繁项集</li>
      <li><strong>支持度</strong> = count(X∪Y) / N（全局比例）</li>
      <li><strong>置信度</strong> = count(X∪Y) / count(X)（条件概率P(Y|X)）</li>
      <li><strong>强关联规则</strong>：满足最小支持度 + 最小置信度</li>
      <li><strong>两阶段</strong>：①产生频繁项集 ②生成关联规则</li>
      <li><strong>Apriori</strong>：候选集产生+剪枝，多次扫描，效率瓶颈</li>
      <li>剪枝依据：非频繁项集的超集一定非频繁</li>
      <li><strong>FP-Growth</strong>：FP树压缩数据，不产生候选集，通常更高效</li>
      <li><strong>提升度</strong> = P(X,Y)/[P(X)×P(Y)]
        <ul>
          <li>=1 独立，&gt;1 正相关，&lt;1 负相关</li>
        </ul>
      </li>
      <li>置信度忽略后件支持度，热门后件可能有伪高置信度</li>
      <li>序列关联关系强调时间先后顺序</li>
    </ul>
  </section>

  <section>
    <h3>第六章 分类预测</h3>
    <ul>
      <li><strong>分类</strong>：预测离散类别标签（有监督）</li>
      <li><strong>决策树</strong>：内部节点=属性测试，叶节点=类标号</li>
      <li><strong>不纯度度量</strong>：
        <ul>
          <li>信息增益：偏向取值多的属性</li>
          <li>增益率：惩罚分支多的属性</li>
          <li>Gini指数：选Gini split最小</li>
        </ul>
      </li>
      <li><strong>剪枝</strong>：预剪枝（提前停止，快但可能过早）vs 后剪枝（完整生长再修剪，效果好但慢）</li>
      <li><strong>过拟合</strong>：训练误差低，测试误差高</li>
      <li><strong>朴素贝叶斯</strong>：条件独立假设；先验×似然∝后验</li>
      <li><strong>KNN</strong>：惰性学习，距离计算，量纲敏感需标准化</li>
      <li><strong>逻辑回归</strong>：用于分类（非回归）</li>
      <li><strong>SVM</strong>：最大间隔超平面；核函数处理非线性；支持向量决定间隔</li>
      <li><strong>神经网络</strong>：前向传播→损失函数→反向传播（梯度）→优化器</li>
      <li><strong>正则化</strong>：L1（稀疏）、L2（限制参数大小，岭回归）</li>
    </ul>
  </section>

  <section>
    <h3>第七章 聚类分析</h3>
    <ul>
      <li><strong>聚类</strong> = 无监督学习，不依赖预先标签</li>
      <li><strong>距离度量</strong>：
        <ul>
          <li>欧氏距离：直线距离</li>
          <li>曼哈顿距离：各维绝对差之和</li>
          <li>余弦相似度：关注方向</li>
        </ul>
      </li>
      <li><strong>SSE</strong>（误差平方和）：衡量簇紧凑度</li>
      <li><strong>K-means</strong>：
        <ul>
          <li>步骤：选k个质心→分配→更新质心→迭代</li>
          <li>局限：需预设K，对初始质心敏感，不适合非球形簇</li>
        </ul>
      </li>
      <li><strong>K-medoids</strong>：中心必须是样本点，更鲁棒但更慢</li>
      <li><strong>层次聚类</strong>：树状图表示</li>
      <li><strong>DBSCAN</strong>：eps+MinPts，任意形状簇，识别噪声点</li>
    </ul>
  </section>

  <section>
    <h3>第八章 回归分析与模型评价</h3>
    <ul>
      <li><strong>分类</strong>（离散标签）vs <strong>回归</strong>（连续数值），都有监督</li>
      <li><strong>混淆矩阵</strong>：TP、FP、TN、FN</li>
      <li><strong>分类评价</strong>：
        <ul>
          <li>准确率 = (TP+TN)/总数</li>
          <li>精确率 = TP/(TP+FP)</li>
          <li>召回率 = TP/(TP+FN)</li>
          <li>F1 = 2PR/(P+R)（调和平均）</li>
          <li>ROC/AUC</li>
        </ul>
      </li>
      <li><strong>场景</strong>：疾病筛查→召回率；垃圾短信→兼顾P和R</li>
      <li><strong>回归评价</strong>：MSE、RMSE、MAE、R²</li>
      <li><strong>过拟合</strong>：训练好测试差</li>
      <li><strong>欠拟合</strong>：训练和测试都差</li>
      <li><strong>处理过拟合</strong>：增加数据、正则化、剪枝、交叉验证、早停、降低复杂度</li>
    </ul>
  </section>
</div>
`;

// ─── 5. downloadFiles ────────────────────────────────────────
const downloadFiles = [
  { icon: '📋', name: '复习大纲PDF', desc: '期末复习大纲', path: 'files/outline.pdf' },
  { icon: '📄', name: '复习大纲Word', desc: '复习大纲docx版', path: 'files/outline.docx' }
];
