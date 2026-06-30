// ============================================================
// data.js - 数据挖掘复习网站完整数据
// ============================================================

// ─── 1. chapterData ──────────────────────────────────────────
const chapterData = [
  // Chapter 1
  {
    title: '第一章 绪论：数据分析与数据挖掘',
    subtitle: '数据分析与数据挖掘的定义、区别、联系与任务分类',
    content: `
      <h3>一、数据分析 vs 数据挖掘</h3>
      <ul>
        <li><strong>数据分析</strong>：用统计方法对数据进行处理、汇总和可视化，回答<strong>"发生了什么、为什么发生"</strong>。</li>
        <li><strong>数据挖掘</strong>：从大量、不完全、有噪声、模糊、随机的数据中，发现潜在的、有用的<strong>知识（模式/规律）</strong>，更强调回答<strong>"还会发生什么"</strong>。</li>
      </ul>
      <h3>二、二者关系</h3>
      <ul>
        <li>数据分析是<strong>基础</strong>（描述性、回顾性）</li>
        <li>数据挖掘是<strong>进阶</strong>（预测性、发现性）</li>
        <li>数据分析为数据挖掘提供数据基础和理解；数据挖掘在数据分析之上进行更深层次的模式发现</li>
      </ul>
      <h3>三、任务分类</h3>
      <table border="1" style="border-collapse:collapse;width:100%">
        <tr><th>类别</th><th>任务</th><th>说明</th></tr>
        <tr><td rowspan="2"><strong>预测类</strong></td><td>分类</td><td>预测离散类别标签（如：是否垃圾邮件）</td></tr>
        <tr><td>回归</td><td>预测连续数值（如：预测房价）</td></tr>
        <tr><td rowspan="2"><strong>描述类</strong></td><td>聚类</td><td>自动将数据分成若干组，无预先标签</td></tr>
        <tr><td>关联规则</td><td>发现数据项之间的共现关系（如：购物篮分析）</td></tr>
      </table>
      <h3>四、预测任务 vs 描述任务</h3>
      <ul>
        <li><strong>预测任务</strong>：有目标变量，利用已知属性预测未知值（有监督）</li>
        <li><strong>描述任务</strong>：没有目标变量，发现数据内在结构（无监督）</li>
      </ul>
      <h3>五、超市销售例子</h3>
      <ul>
        <li>数据分析：统计本月各商品销售额、各门店销售排名</li>
        <li>数据挖掘：发现"买面包的顾客也常买牛奶"（关联规则）、预测下月销售额（回归）、对客户自动分群（聚类）</li>
      </ul>
      <h3>六、易错点</h3>
      <ul>
        <li>不要把所有数据处理都叫数据挖掘——简单的查询、统计属于数据分析</li>
        <li>聚类是<strong>描述类</strong>任务，不是预测任务</li>
        <li>回归预测的是连续数值，分类预测的是离散类别</li>
      </ul>
      <h3>七、复习步骤</h3>
      <ol>
        <li>掌握数据分析与数据挖掘的定义和区别</li>
        <li>理解四种任务类型（分类、回归、聚类、关联规则）</li>
        <li>能举例说明预测类和描述类任务</li>
        <li>注意易错点</li>
      </ol>
    `
  },
  // Chapter 2
  {
    title: '第二章 数据挖掘的过程',
    subtitle: '8个能力等级、两阶段、OLAP、过程模型',
    content: `
      <h3>一、数据分析能力8个等级</h3>
      <table border="1" style="border-collapse:collapse;width:100%">
        <tr><th colspan="2">描述阶段</th><th colspan="2">挖掘阶段</th></tr>
        <tr><td>1. 常规报表</td><td>固定格式报表</td><td>5. 统计分析</td><td>用统计方法深入分析</td></tr>
        <tr><td>2. 即席查询</td><td>灵活查询</td><td>6. 预报</td><td>"下月各门店需求量？"</td></tr>
        <tr><td>3. OLAP/多维分析</td><td>多角度分析</td><td>7. 预测型建模</td><td>用模型预测未来</td></tr>
        <tr><td>4. 警报</td><td>自动提醒</td><td>8. 优化</td><td>在约束下选最优方案</td></tr>
      </table>
      <h3>二、描述阶段 vs 挖掘阶段</h3>
      <ul>
        <li><strong>描述阶段</strong>：回答"发生了什么、在哪里、何时需要反应"</li>
        <li><strong>挖掘阶段</strong>：回答"为什么、未来如何、接下来会发生什么、如何优化"</li>
      </ul>
      <h3>三、OLAP操作</h3>
      <ul>
        <li><strong>切片（Slice）</strong>：固定某些维度，查看子集</li>
        <li><strong>切块（Dice）</strong>：选择多维区间</li>
        <li><strong>钻取（Drill-down）</strong>：从粗粒度到细粒度（年→季度→月→日）</li>
        <li><strong>上卷（Roll-up）</strong>：从细粒度到粗粒度（城市→省份）</li>
        <li><strong>旋转（Pivot）</strong>：改变维度显示方向</li>
      </ul>
      <h3>四、三阶段过程模型</h3>
      <ol>
        <li><strong>数据准备</strong>：数据集成、选择、预处理、转换</li>
        <li><strong>数据挖掘</strong>：选用算法，形成模型</li>
        <li><strong>解释评估</strong>：对模型和模式进行解释、评价</li>
      </ol>
      <h3>五、SEMMA模型</h3>
      <ol>
        <li><strong>Sample</strong>（抽样）</li>
        <li><strong>Explore</strong>（探索）</li>
        <li><strong>Modify</strong>（修改/预处理）</li>
        <li><strong>Model</strong>（建模）</li>
        <li><strong>Assess</strong>（评估）</li>
      </ol>
      <p>反馈式流程：评估不理想可返回前面步骤。</p>
      <h3>六、CRISP-DM模型</h3>
      <ol>
        <li><strong>商业理解</strong>（首先强调）</li>
        <li>数据理解</li>
        <li>数据准备</li>
        <li>建模</li>
        <li>评估</li>
        <li><strong>发布</strong>（最后环节）</li>
      </ol>
      <h3>七、5A模型</h3>
      <ol>
        <li><strong>Assess</strong>（评估需求）</li>
        <li><strong>Access</strong>（获取数据）</li>
        <li><strong>Analyze</strong>（分析）</li>
        <li><strong>Act</strong>（行动）</li>
        <li><strong>Automate</strong>（自动化）</li>
      </ol>
      <p>5A更强调结果落地和工具功能。</p>
      <h3>八、反馈机制</h3>
      <ul>
        <li>所有模型都强调迭代和反馈</li>
        <li>结果不理想时应返回前面步骤重新处理</li>
      </ul>
    `
  },
  // Chapter 3
  {
    title: '第三章 数据准备',
    subtitle: '收集、抽样、集成、清理、规约与变换',
    content: `
      <h3>一、数据准备的地位</h3>
      <ul>
        <li>数据准备是数据挖掘的<strong>基础环节</strong>，通常占据项目<strong>大量工作量</strong></li>
        <li>高质量数据要求：准确、完整、一致、及时、可信</li>
      </ul>
      <h3>二、四种抽样方法</h3>
      <table border="1" style="border-collapse:collapse;width:100%">
        <tr><th>方法</th><th>思想</th><th>适用场景</th></tr>
        <tr><td>简单随机抽样</td><td>每个个体等概率被抽中</td><td>总体均匀</td></tr>
        <tr><td>系统抽样</td><td>等间隔抽取</td><td>无周期性，否则有偏差</td></tr>
        <tr><td>分层抽样</td><td>先分层，每层都抽</td><td>层内同质、层间异质（提高精度）</td></tr>
        <tr><td>整群抽样</td><td>先分群，抽若干群调查全部</td><td>群内异质、群间同质（降低成本）</td></tr>
      </table>
      <h3>三、数据集成</h3>
      <ul>
        <li><strong>数据仓库</strong>：物理复制，查询快但实时性差，支持历史趋势</li>
        <li><strong>数据联邦</strong>：虚拟化集成视图，不实际复制，实时性好</li>
        <li><strong>中间件</strong>：介于两者之间</li>
        <li>难点：同名异义、别名、表达不一致（实体识别冲突）；各源可独立变更（自治性）</li>
      </ul>
      <h3>四、异常值检测</h3>
      <ul>
        <li><strong>3σ原则</strong>：正态分布下，正常数据落在 [μ-3σ, μ+3σ] 区间</li>
        <li><strong>IQR法</strong>：IQR = Q3 - Q1；异常值 &lt; Q1 - 1.5×IQR 或 &gt; Q3 + 1.5×IQR</li>
      </ul>
      <h3>五、数据变换</h3>
      <ul>
        <li><strong>Min-Max归一化</strong>：映射到 [0,1] 区间</li>
        <li><strong>Z-score标准化</strong>：变为均值0、标准差1</li>
        <li><strong>离散化</strong>：把连续数值变成有限区间或类别</li>
        <li><strong>PCA降维</strong>：主成分含义通常比原始变量<strong>更模糊</strong>（不是更清楚）</li>
        <li><strong>哈希编码</strong>：适合高基数属性，但可能出现哈希冲突</li>
      </ul>
      <h3>六、易错点</h3>
      <ul>
        <li>分层抽样 vs 整群抽样容易反——分层要求"层内同质层间异质"，整群要求"群内异质群间同质"</li>
        <li>归一化（Min-Max→[0,1]）vs 标准化（Z-score→均值0标准差1）不要混</li>
        <li>PCA降维后主成分含义更模糊，不是更直观清楚</li>
      </ul>
    `
  },
  // Chapter 4
  {
    title: '第四章 数据探索与描述性统计',
    subtitle: '属性类型、集中量数、差异量数、相关性量数',
    content: `
      <h3>一、数据探索的作用</h3>
      <ul>
        <li>初步了解数据内容、性质与质量</li>
        <li>评估完整性和一致性</li>
        <li>识别模式和分布</li>
        <li>为选择预处理工具和分析技术提供依据</li>
      </ul>
      <h3>二、数据属性类型</h3>
      <table border="1" style="border-collapse:collapse;width:100%">
        <tr><th>类型</th><th>特点</th><th>例子</th></tr>
        <tr><td>连续型</td><td>可取任意实数值</td><td>销售额、温度</td></tr>
        <tr><td>离散型</td><td>可数有限或无限值</td><td>职工人数、商品数量</td></tr>
        <tr><td>标称型</td><td>无序类别</td><td>血型、性别</td></tr>
        <tr><td>有序型</td><td>有顺序但不能常规加减</td><td>满意度等级</td></tr>
      </table>
      <h3>三、集中量数</h3>
      <ul>
        <li><strong>均值</strong>：所有值求和平均，<strong>最易受极端值影响</strong></li>
        <li><strong>截断均值</strong>：去掉极端值后的均值，更稳健</li>
        <li><strong>中位数</strong>：排序后中间位置，较稳健</li>
        <li><strong>众数</strong>：出现次数最多的值，可能不唯一或不存在</li>
        <li><strong>百分位数</strong>：将数据分为100等份</li>
      </ul>
      <h3>四、差异量数</h3>
      <ul>
        <li><strong>极差</strong>：最大值-最小值，受极端值影响大</li>
        <li><strong>方差/标准差</strong>：衡量数据偏离均值的程度</li>
        <li><strong>MAD（中位数绝对偏差）</strong>：稳健统计量，不受极端值影响</li>
        <li><strong>IQR（四分位极差）</strong>：Q3-Q1，代表中间50%数据的波动范围</li>
      </ul>
      <h3>五、相关性量数</h3>
      <ul>
        <li><strong>协方差</strong>：衡量两变量共同变化趋势；同向为正，反向为负；同一变量的协方差=方差</li>
        <li><strong>Pearson相关系数</strong>：衡量线性相关程度，范围[-1,1]</li>
        <li><strong>协方差矩阵</strong>：对角线=方差，非对角线=协方差</li>
      </ul>
      <h3>六、稳健统计量</h3>
      <ul>
        <li>不受极端值显著影响的统计量：中位数、MAD、IQR</li>
      </ul>
    `
  },
  // Chapter 5
  {
    title: '第五章 关联分析',
    subtitle: '支持度、置信度、Apriori、FP-Growth、提升度',
    content: `
      <h3>一、关联分析定义与应用</h3>
      <ul>
        <li>发现数据项之间的共现关系</li>
        <li>典型应用：购物篮分析、交叉销售、商品推荐</li>
      </ul>
      <h3>二、核心概念</h3>
      <ul>
        <li><strong>项集</strong>：一组物品的集合，如 {牛奶,面包}</li>
        <li><strong>支持度计数</strong>：包含该项集的事务数</li>
        <li><strong>候选项集</strong>：未经支持度检验的项集</li>
        <li><strong>频繁项集</strong>：满足最小支持度的项集</li>
      </ul>
      <h3>三、核心指标</h3>
      <ul>
        <li><strong>支持度</strong> = 同时包含X和Y的事务数 / 总事务数（看全局）</li>
        <li><strong>置信度</strong> = 同时包含X和Y的事务数 / 包含X的事务数（看局部/条件概率）</li>
        <li><strong>强关联规则</strong>：同时满足最小支持度和最小置信度的规则</li>
      </ul>
      <h3>四、两阶段框架</h3>
      <ol>
        <li>产生频繁项集（满足最小支持度）</li>
        <li>生成关联规则（满足最小置信度）</li>
      </ol>
      <h3>五、Apriori vs FP-Growth</h3>
      <table border="1" style="border-collapse:collapse;width:100%">
        <tr><th>比较项</th><th>Apriori</th><th>FP-Growth</th></tr>
        <tr><td>核心思想</td><td>候选项集产生+剪枝</td><td>FP树压缩数据</td></tr>
        <tr><td>候选集</td><td>产生大量候选集</td><td>不产生候选集</td></tr>
        <tr><td>数据库扫描</td><td>多次扫描</td><td>2次扫描</td></tr>
        <tr><td>效率</td><td>候选集多时效率低</td><td>通常更高效</td></tr>
      </table>
      <p>Apriori剪枝依据：<strong>非频繁项集的超集一定非频繁</strong></p>
      <h3>六、提升度/兴趣因子</h3>
      <ul>
        <li>lift = P(X,Y) / [P(X)×P(Y)]</li>
        <li>lift = 1：前件和后件<strong>相互独立</strong></li>
        <li>lift &gt; 1：<strong>正相关</strong></li>
        <li>lift &lt; 1：<strong>负相关</strong></li>
        <li>置信度会忽略后件本身支持度，后件热门时可能有伪高置信度；提升度解决此问题</li>
      </ul>
      <h3>七、计算题方法</h3>
      <ul>
        <li>支持度 = 同时出现次数 / 总事务数</li>
        <li>置信度 = 同时出现次数 / 前件出现次数</li>
        <li>例：10笔交易中4笔同时买油条和豆浆，5笔买油条 → 支持度=40%，置信度=80%</li>
      </ul>
    `
  },
  // Chapter 6
  {
    title: '第六章 分类预测',
    subtitle: '决策树、朴素贝叶斯、KNN、SVM、神经网络',
    content: `
      <h3>一、分类定义与过程</h3>
      <ul>
        <li>分类：根据已知特征预测离散类别标签（有监督学习）</li>
        <li>过程：选择训练集→建立分类模型→用测试集评估→应用模型</li>
        <li>训练样本必须包含属性值和类别标记</li>
      </ul>
      <h3>二、决策树</h3>
      <ul>
        <li><strong>内部节点</strong> = 属性测试</li>
        <li><strong>叶节点</strong> = 类标号</li>
        <li>对未知样本分类时，沿根节点到叶节点的路径得到预测类别</li>
      </ul>
      <h3>三、不纯度度量</h3>
      <ul>
        <li><strong>信息增益</strong>：偏向选择<strong>取值较多</strong>的属性</li>
        <li><strong>增益率</strong>：通过惩罚分支多的属性来改进信息增益偏向</li>
        <li><strong>Gini指数</strong>：选择Gini split最小的划分</li>
        <li>CART分类树常用基尼指数</li>
      </ul>
      <h3>四、剪枝</h3>
      <ul>
        <li><strong>预剪枝</strong>：在树生长过程中提前停止，速度快但可能过早</li>
        <li><strong>后剪枝</strong>：先让树完整生长再修剪不必要分支，效果较好但计算量大</li>
        <li>目的：防止过拟合</li>
      </ul>
      <h3>五、过拟合</h3>
      <ul>
        <li>训练误差很低而测试误差很高</li>
        <li>模型记住了训练数据的噪声和细节，泛化能力差</li>
      </ul>
      <h3>六、朴素贝叶斯</h3>
      <ul>
        <li>核心简化假设：各特征<strong>条件独立</strong></li>
        <li>先验概率：不看特征时某类出现概率</li>
        <li>似然：某类中出现这些特征的概率</li>
        <li>后验概率：看到特征后某类出现的概率</li>
        <li>理论上最小错误率，但实践中因条件独立假设不一定最优</li>
      </ul>
      <h3>七、其他分类算法</h3>
      <ul>
        <li><strong>KNN</strong>：惰性学习（训练阶段主要保存样本），依赖距离计算，量纲敏感需标准化</li>
        <li><strong>逻辑回归</strong>：虽然名字带回归，但主要用于分类</li>
        <li><strong>SVM</strong>：寻找最大间隔超平面；核函数处理非线性问题；支持向量是距离超平面最近并决定间隔的样本</li>
        <li><strong>神经网络</strong>：前向传播计算预测→损失函数度量误差→反向传播计算梯度→优化器更新参数</li>
      </ul>
      <h3>八、正则化</h3>
      <ul>
        <li><strong>L1正则化</strong>：促使参数稀疏</li>
        <li><strong>L2正则化</strong>（岭回归）：限制参数过大，缓解过拟合</li>
      </ul>
    `
  },
  // Chapter 7
  {
    title: '第七章 聚类分析',
    subtitle: 'K-means、K-medoids、层次聚类、DBSCAN',
    content: `
      <h3>一、聚类 = 无监督学习</h3>
      <ul>
        <li>不依赖预先给定的类别标签</li>
        <li>根据样本相似性自动划分</li>
        <li>每个数据元素属于且仅属于一个簇</li>
      </ul>
      <h3>二、距离度量</h3>
      <ul>
        <li><strong>欧氏距离</strong>：空间中两点直线距离</li>
        <li><strong>曼哈顿距离</strong>：各维绝对差之和（网格路径）</li>
        <li><strong>余弦相似度</strong>：关注方向，常用于文本和高维稀疏数据</li>
      </ul>
      <h3>三、SSE（误差平方和）</h3>
      <ul>
        <li>衡量簇的紧凑度</li>
        <li>使用均值作为质心可使SSE达到理论最小</li>
      </ul>
      <h3>四、K-means</h3>
      <ul>
        <li><strong>思想</strong>：选k个初始质心，按最近质心分配样本，重新计算质心，迭代直到收敛</li>
        <li><strong>步骤</strong>：①选k个初始质心 ②按最近质心分配 ③重新计算质心 ④迭代直到质心不变或SSE不再优化</li>
        <li><strong>初始质心方法</strong>：随机选择、多次运行选最小SSE、层次聚类提取、离散质心法</li>
        <li><strong>局限</strong>：需预设K，对初始质心和异常值敏感，不适合非球形簇</li>
      </ul>
      <h3>五、K-medoids</h3>
      <ul>
        <li>中心点必须从<strong>实际样本点</strong>中选取</li>
        <li>对噪声和极端值<strong>更鲁棒</strong></li>
        <li>但计算速度<strong>更慢</strong></li>
      </ul>
      <h3>六、层次聚类</h3>
      <ul>
        <li>用<strong>树状图</strong>表示聚类过程</li>
        <li>可自底向上（凝聚）或自顶向下（分裂）</li>
      </ul>
      <h3>七、DBSCAN</h3>
      <ul>
        <li>两个重要参数：<strong>eps</strong>（邻域半径）和<strong>MinPts</strong>（最小点数）</li>
        <li>可发现<strong>任意形状</strong>簇</li>
        <li>能识别<strong>噪声点</strong></li>
        <li>不需要预先指定簇数</li>
      </ul>
    `
  },
  // Chapter 8
  {
    title: '第八章 回归分析与模型评价',
    subtitle: '分类评价、回归评价、过拟合与欠拟合',
    content: `
      <h3>一、分类 vs 回归</h3>
      <ul>
        <li><strong>分类</strong>：预测离散类别标签（如：是否垃圾邮件）</li>
        <li><strong>回归</strong>：预测连续数值（如：房价、温度）</li>
        <li>两者都需要已知标签数据进行训练，都属于有监督学习</li>
      </ul>
      <h3>二、混淆矩阵</h3>
      <table border="1" style="border-collapse:collapse;width:100%">
        <tr><th></th><th>预测为正</th><th>预测为负</th></tr>
        <tr><td><strong>实际为正</strong></td><td>TP（真正例）</td><td>FN（假负例）</td></tr>
        <tr><td><strong>实际为负</strong></td><td>FP（假正例）</td><td>TN（真负例）</td></tr>
      </table>
      <h3>三、分类评价指标</h3>
      <ul>
        <li><strong>准确率</strong> = (TP+TN) / (TP+TN+FP+FN)</li>
        <li><strong>精确率</strong> = TP / (TP+FP)（预测为正的样本中有多少是真的）</li>
        <li><strong>召回率</strong> = TP / (TP+FN)（实际为正的样本中找回了多少）</li>
        <li><strong>F1值</strong> = 2×精确率×召回率 / (精确率+召回率)（调和平均）</li>
        <li>ROC/AUC也属于分类评价指标</li>
      </ul>
      <h3>四、场景判断</h3>
      <ul>
        <li><strong>疾病筛查</strong>→更重视召回率（不能漏掉患者）</li>
        <li><strong>垃圾短信拦截</strong>→需兼顾精确率和召回率</li>
      </ul>
      <h3>五、回归评价指标</h3>
      <ul>
        <li><strong>MSE</strong>（均方误差）：预测值与真实值差的平方平均</li>
        <li><strong>RMSE</strong>（均方根误差）：MSE的平方根</li>
        <li><strong>MAE</strong>（平均绝对误差）：预测值与真实值差的绝对值平均</li>
        <li><strong>R²</strong>（决定系数）：模型解释的变异占总变异的比例</li>
      </ul>
      <h3>六、过拟合 vs 欠拟合</h3>
      <table border="1" style="border-collapse:collapse;width:100%">
        <tr><th></th><th>训练集</th><th>测试集</th></tr>
        <tr><td><strong>过拟合</strong></td><td>表现好</td><td>表现差</td></tr>
        <tr><td><strong>欠拟合</strong></td><td>表现差</td><td>表现差</td></tr>
      </table>
      <h3>七、处理过拟合的方法</h3>
      <ul>
        <li>增加训练数据</li>
        <li>正则化（L1/L2）</li>
        <li>剪枝</li>
        <li>交叉验证</li>
        <li>早停</li>
        <li>降低模型复杂度</li>
      </ul>
    `
  }
];

// ─── 2. chapterQuizzes ───────────────────────────────────────
const chapterQuizzes = [
  // Chapter 1 Quiz
  {
    title: '第一章 绪论：数据分析与数据挖掘',
    questions: [
      { type: 'choice', question: '数据挖掘相比传统数据分析，更强调什么？', options: ['人工汇总已知指标', '从大量复杂数据中自动发现潜在规律', '只制作固定报表', '只做数据库查询'], answer: 'B', focus: '数据挖掘定义', explanation: '数据挖掘的核心是从大量、复杂数据中自动发现潜在规律和知识，而非简单的统计汇总。' },
      { type: 'choice', question: '下列哪项属于描述类数据挖掘任务？', options: ['分类', '回归', '关联规则发现', '预测房价'], answer: 'C', focus: '任务分类', explanation: '描述类任务包括聚类和关联规则发现，不需要目标变量；分类和回归属于预测类任务。' },
      { type: 'judge', question: '数据分析主要回答"发生了什么、为什么发生"，数据挖掘更强调发现潜在规律和预测', answer: '对', focus: '数据分析与数据挖掘的区别', explanation: '数据分析侧重于描述性和回顾性分析，数据挖掘侧重于预测性和发现性分析。' },
      { type: 'fill', question: '数据挖掘常被定义为从大量、不完全、有噪声、模糊、随机的数据中发现潜在有用的____', answer: '知识', focus: '数据挖掘定义', explanation: '数据挖掘的经典定义强调从数据中发现潜在有用的知识。' },
      { type: 'essay', question: '结合一个业务例子说明数据分析与数据挖掘的区别和联系', answer: '要点：数据分析用统计方法处理数据并形成结论；数据挖掘自动发现隐藏规律；数据分析是基础、数据挖掘是进阶', focus: '区别与联系', explanation: '数据分析是对数据的统计处理和可视化，回答发生了什么；数据挖掘是自动发现隐藏模式，预测未来趋势。二者相辅相成。', alternatives: [] },
      { type: 'choice', question: '"预测哪些客户下月可能流失"更接近哪类任务？', options: ['常规报表', '分类/预测建模', '数据清洗', '数据集成'], answer: 'B', focus: '任务分类', explanation: '预测客户是否流失是典型的分类/预测建模任务，需要预测离散类别标签。' },
      { type: 'choice', question: '"把客户按购买行为自动分成几类"更接近哪类任务？', options: ['聚类', '回归', '固定报表', '数据联邦'], answer: 'A', focus: '任务分类', explanation: '自动将客户分组不需要预先给定的标签，属于聚类（描述类任务）。' },
      { type: 'choice', question: '下列哪项最能体现数据挖掘的"潜在规律发现"？', options: ['查询本月销售额', '统计员工人数', '发现买面包者常同时买牛奶', '打印库存清单'], answer: 'C', focus: '数据挖掘特征', explanation: '发现共现规律（关联规则）是数据挖掘自动发现潜在模式的典型体现。' },
      { type: 'judge', question: '传统查询和OLAP更偏向对已知问题进行演绎式分析', answer: '对', focus: '数据分析能力', explanation: '传统查询和OLAP主要用于对已知问题进行多角度分析，属于描述阶段。' },
      { type: 'judge', question: '回归任务预测的是离散类别标签', answer: '错', focus: '任务分类', explanation: '回归任务预测的是连续数值，分类任务才预测离散类别标签。' },
      { type: 'fill', question: '预测类任务主要包括分类和____', answer: '回归', focus: '任务分类', explanation: '预测类任务包括分类（预测离散标签）和回归（预测连续数值）。' },
      { type: 'fill', question: '描述类任务主要包括聚类和____发现', answer: '关联规则', focus: '任务分类', explanation: '描述类任务包括聚类和关联规则发现，不需要目标变量。' },
      { type: 'essay', question: '分别举一个分类、回归、聚类、关联规则的例子', answer: '分类：判断邮件是否垃圾；回归：预测房价；聚类：客户自动分群；关联规则：发现牛奶与面包共现', focus: '任务类型举例', explanation: '分类预测离散标签，回归预测连续值，聚类自动分组，关联规则发现共现关系。', alternatives: [] },
      { type: 'choice', question: '"根据历史销售额预测下月销售额"属于哪类任务？', options: ['回归', '聚类', '关联规则', '数据清洗'], answer: 'A', focus: '任务分类', explanation: '预测连续数值（销售额）属于回归任务。' },
      { type: 'choice', question: '"发现网站点击流中的共现访问路径"更接近哪类挖掘？', options: ['关联分析', '数据归一化', '异常值清洗', '固定报表'], answer: 'A', focus: '任务分类', explanation: '发现共现访问路径是关联分析的典型应用。' },
      { type: 'judge', question: '数据挖掘一定只处理完全准确、无噪声的数据', answer: '错', focus: '数据挖掘特点', explanation: '数据挖掘的定义本身就包含处理不完全、有噪声、模糊的数据。' },
      { type: 'judge', question: '分类和回归都属于预测类任务', answer: '对', focus: '任务分类', explanation: '分类（预测离散标签）和回归（预测连续数值）都属于预测类任务。' },
      { type: 'fill', question: '数据分析是基础，数据挖掘是____', answer: '进阶', focus: '二者关系', explanation: '数据分析提供数据基础和理解，数据挖掘在此基础上进行更深层次的模式发现。' },
      { type: 'fill', question: '聚类不依赖预先给定的类别____', answer: '标签', focus: '聚类特征', explanation: '聚类是无监督学习，不需要预先给定的类别标签。' },
      { type: 'essay', question: '为什么说数据挖掘更适合处理"传统逻辑不清晰"的复杂数据问题？', answer: '因为当数据量很大、关系复杂、人眼和传统逻辑难以直接总结规律时，数据挖掘可通过算法模型自动发现隐藏模式', focus: '数据挖掘优势', explanation: '数据挖掘的优势在于能自动从大量复杂数据中发现人难以直接观察到的模式和规律。', alternatives: [] }
    ]
  },
  // Chapter 2 Quiz
  {
    title: '第二章 数据挖掘的过程',
    questions: [
      { type: 'choice', question: '下列哪一项属于数据分析能力的挖掘阶段？', options: ['常规报表', '即席查询', '警报', '预测型建模'], answer: 'D', focus: '能力等级', explanation: '预测型建模属于挖掘阶段（5-8级），前三个属于描述阶段（1-4级）。' },
      { type: 'choice', question: 'OLAP中从城市汇总到省份，更接近哪种操作？', options: ['钻取', '上卷', '离散化', '剪枝'], answer: 'B', focus: 'OLAP操作', explanation: '从细粒度到粗粒度是上卷操作；从粗到细是钻取。' },
      { type: 'fill', question: 'SEMMA中的S表示____', answer: 'Sample', focus: 'SEMMA模型', explanation: 'SEMMA: Sample→Explore→Modify→Model→Assess。' },
      { type: 'judge', question: 'CRISP-DM强调商业理解、数据理解、数据准备、建模、模型评估和结果发布等环节', answer: '对', focus: 'CRISP-DM模型', explanation: 'CRISP-DM包含六个阶段：商业理解→数据理解→数据准备→建模→评估→发布。' },
      { type: 'essay', question: '说明数据挖掘三阶段过程模型及每个阶段的作用', answer: '数据准备包括集成、选择、预处理、转换；数据挖掘阶段选用算法形成模型；解释评估阶段对模型和模式进行解释、评价', focus: '三阶段模型', explanation: '三阶段模型是数据挖掘的基本流程框架。', alternatives: [] },
      { type: 'choice', question: '下列哪项属于描述阶段？', options: ['预测型建模', '优化', '多维分析/OLAP', '预报'], answer: 'C', focus: '能力等级', explanation: 'OLAP/多维分析属于描述阶段（第3级），其他三项属于挖掘阶段。' },
      { type: 'choice', question: '"下个月各门店需求量会是多少"对应8等级中的哪一类？', options: ['常规报表', '预报', '警报', '即席查询'], answer: 'B', focus: '能力等级', explanation: '预报属于挖掘阶段，回答未来趋势的问题。' },
      { type: 'choice', question: '"如何在约束条件下选择最佳方案"对应哪一等级？', options: ['优化', '多维分析', '常规报表', '数据清洗'], answer: 'A', focus: '能力等级', explanation: '优化是最高等级（第8级），在约束条件下选择最优方案。' },
      { type: 'choice', question: 'CRISP-DM流程中首先强调的是？', options: ['商业理解', '直接建模', '模型发布', '画图'], answer: 'A', focus: 'CRISP-DM模型', explanation: 'CRISP-DM首先强调商业理解，明确业务目标和问题。' },
      { type: 'judge', question: '数据准备阶段在数据挖掘项目中通常非常重要，并占据大量工作', answer: '对', focus: '数据准备', explanation: '数据准备通常占据项目60-80%的工作量。' },
      { type: 'judge', question: 'SEMMA模型不允许在结果不理想时回到前面步骤', answer: '错', focus: 'SEMMA模型', explanation: 'SEMMA是反馈式流程，评估不理想时可返回前面步骤重新处理。' },
      { type: 'fill', question: '数据挖掘三阶段过程模型包括数据准备、数据挖掘和____评估', answer: '解释', focus: '三阶段模型', explanation: '三阶段：数据准备→数据挖掘→解释评估。' },
      { type: 'fill', question: '数据分析能力8等级中，描述阶段的最后一级是____', answer: '警报', focus: '能力等级', explanation: '描述阶段包括：常规报表→即席查询→OLAP→警报。' },
      { type: 'essay', question: '按顺序写出SEMMA的五个步骤，并说明它为什么体现反馈式流程', answer: 'Sample、Explore、Modify、Model、Assess。模型评估不理想时，可返回抽样、探索或调整环节重新处理', focus: 'SEMMA模型', explanation: 'SEMMA的反馈机制是其重要特点。', alternatives: [] },
      { type: 'choice', question: '"销售额低于目标时自动提醒负责人"属于哪一等级？', options: ['警报', '优化', '预测型建模', '数据变换'], answer: 'A', focus: '能力等级', explanation: '警报属于描述阶段最高级（第4级），自动提醒。' },
      { type: 'choice', question: '5A模型更强调什么？', options: ['结果落地和工具功能', '只做抽样', '只做关联规则', '只处理缺失值'], answer: 'A', focus: '5A模型', explanation: '5A模型强调从评估到行动的完整闭环，注重结果落地。' },
      { type: 'judge', question: '三阶段模型包括数据准备、数据挖掘、解释评估', answer: '对', focus: '三阶段模型', explanation: '这是数据挖掘的基本三阶段过程模型。' },
      { type: 'fill', question: 'CRISP-DM最后一个环节是结果____', answer: '发布', focus: 'CRISP-DM模型', explanation: 'CRISP-DM: 商业理解→数据理解→数据准备→建模→评估→发布。' },
      { type: 'fill', question: 'OLAP中从年到季度、月、日查看数据，属于向下____', answer: '钻取', focus: 'OLAP操作', explanation: '从粗粒度到细粒度是钻取（Drill-down）操作。' },
      { type: 'essay', question: '说明"描述阶段"和"挖掘阶段"分别回答哪类问题', answer: '描述阶段主要回答发生了什么、在哪里、何时需要反应；挖掘阶段进一步回答为什么、未来如何、接下来会发生什么以及如何优化决策', focus: '两阶段对比', explanation: '描述阶段侧重回顾，挖掘阶段侧重预测和优化。', alternatives: [] }
    ]
  },
  // Chapter 3 Quiz
  {
    title: '第三章 数据准备',
    questions: [
      { type: 'choice', question: '分层抽样最适合哪类总体？', options: ['层内同质、层间异质', '层内异质、层间同质', '完全没有分层结构', '只能用于时间序列'], answer: 'A', focus: '抽样方法', explanation: '分层抽样要求层内同质、层间异质，这样每层内部一致但层间有差异，能提高抽样精度。' },
      { type: 'choice', question: 'Min-Max归一化的结果通常映射到哪个区间？', options: ['[-1,1]', '[0,1]', '均值0标准差1', '任意类别标签'], answer: 'B', focus: '数据变换', explanation: 'Min-Max归一化将数据线性映射到[0,1]区间。' },
      { type: 'fill', question: '正态分布下3σ原则的正常数据区间为[μ-3σ, ____]', answer: 'μ+3σ', focus: '异常值检测', explanation: '正态分布下约99.7%的数据落在[μ-3σ, μ+3σ]区间内。', alternatives: ['mu+3sigma', 'μ+3σ'] },
      { type: 'judge', question: '哈希编码适合高基数属性，但可能出现哈希冲突', answer: '对', focus: '数据变换', explanation: '哈希编码将高基数属性映射到固定维度，但不同值可能映射到同一位置（冲突）。' },
      { type: 'essay', question: '比较分层抽样与整群抽样的差异', answer: '分层先分层每层都抽，目标是提高精度，要求层内同质层间异质；整群先分群抽若干群并调查群内个体，目标是降低成本，要求群内异质群间同质', focus: '抽样方法对比', explanation: '两者的核心差异在于分组标准和抽样策略。', alternatives: [] },
      { type: 'choice', question: '系统抽样的主要风险是？', options: ['无法抽样', '数据存在周期性时可能产生偏差', '只能用于文本', '一定比所有方法精度高'], answer: 'B', focus: '抽样方法', explanation: '如果数据存在与抽样间隔相同的周期性，系统抽样会产生偏差。' },
      { type: 'choice', question: '数据联邦的核心特点是？', options: ['实际复制全部数据', '提供虚拟化集成视图', '只能离线批处理', '完全不需要元数据'], answer: 'B', focus: '数据集成', explanation: '数据联邦通过虚拟化视图集成数据，不实际复制数据。' },
      { type: 'choice', question: '数据仓库相对数据联邦的常见特点是？', options: ['查询快但实时性较差', '完全不存储数据', '只能查实时源', '不支持历史趋势分析'], answer: 'A', focus: '数据集成', explanation: '数据仓库物理复制数据，查询快但数据更新有延迟，实时性较差。' },
      { type: 'choice', question: 'Z-score标准化后的数据通常具有什么特征？', options: ['均值0、标准差1', '全部落在[0,1]', '全部变成类别', '删除异常值'], answer: 'A', focus: '数据变换', explanation: 'Z-score标准化将数据变为均值0、标准差1的分布。' },
      { type: 'choice', question: '离散化主要是把什么变成有限区间或类别？', options: ['连续数值', '文件名', '算法代码', '训练标签'], answer: 'A', focus: '数据变换', explanation: '离散化将连续数值属性划分为有限个区间或类别。' },
      { type: 'judge', question: '整群抽样通常用于群内异质、群间同质的总体', answer: '对', focus: '抽样方法', explanation: '整群抽样要求群内异质（每群都能代表总体）、群间同质（群之间差异小）。' },
      { type: 'judge', question: '数据挖掘抽样主要是因为处理全样本的计算成本可能过高', answer: '对', focus: '抽样原因', explanation: '大数据集的全样本处理计算成本很高，抽样可以在可接受精度下大幅降低成本。' },
      { type: 'judge', question: 'PCA降维后的主成分含义通常比原始变量更直观清楚', answer: '错', focus: 'PCA', explanation: 'PCA主成分是原始变量的线性组合，含义通常比原始变量更模糊。' },
      { type: 'fill', question: '四分位极差IQR等于Q3减____', answer: 'Q1', focus: '异常值检测', explanation: 'IQR = Q3 - Q1，表示中间50%数据的范围。' },
      { type: 'fill', question: '数据集成难点中，各数据源可独立变更且不通知集成系统，体现的是____性', answer: '自治', focus: '数据集成', explanation: '数据源的自治性使得集成系统难以及时感知变化。' },
      { type: 'essay', question: '说明为什么数据挖掘前必须进行异常值检测和清洗', answer: '异常值可能来自噪声、录入错误或特殊样本，会导致模型失真、影响参数和距离计算、降低算法稳定性', focus: '异常值处理', explanation: '异常值会严重影响数据质量和模型效果。', alternatives: [] },
      { type: 'choice', question: '下列哪项属于数据清洗？', options: ['处理缺失值', '生成FP树', '计算提升度', '选择最大间隔超平面'], answer: 'A', focus: '数据准备', explanation: '处理缺失值是数据清洗的典型任务。' },
      { type: 'choice', question: '下列哪项属于数据规约？', options: ['PCA降维', '置信度计算', '决策树剪枝', '支持向量选择'], answer: 'A', focus: '数据准备', explanation: 'PCA降维是数据规约的典型方法，减少数据维度。' },
      { type: 'judge', question: '数据集成时可能遇到同名异义、别名或表达形式不一致等实体识别冲突', answer: '对', focus: '数据集成', explanation: '不同数据源的命名习惯不同，需要解决实体识别问题。' },
      { type: 'fill', question: '数据预处理主要任务包括清洗、集成、变换和数据____', answer: '规约', focus: '数据准备', explanation: '数据预处理的四大任务：清洗、集成、变换、规约。' }
    ]
  },
  // Chapter 4 Quiz
  {
    title: '第四章 数据探索与描述性统计',
    questions: [
      { type: 'choice', question: '血型属于哪类数据属性？', options: ['连续型', '离散型', '标称型', '有序型'], answer: 'C', focus: '属性类型', explanation: '血型是无序的类别标签，属于标称型数据。' },
      { type: 'choice', question: '下列哪一项对异常值最稳健？', options: ['极差', '均值', '中位数绝对偏差MAD', '方差'], answer: 'C', focus: '稳健统计量', explanation: 'MAD使用中位数，不受极端值影响，是最稳健的差异量数。' },
      { type: 'fill', question: '两个变量同向变化时，协方差通常为____', answer: '正', focus: '相关性量数', explanation: '同向变化时协方差为正，反向变化时为负。' },
      { type: 'judge', question: '协方差矩阵的对角线元素是各变量的方差', answer: '对', focus: '协方差矩阵', explanation: '对角线是变量与自身的协方差，即方差。' },
      { type: 'essay', question: '说明数据探索在数据挖掘流程中的作用', answer: '初步了解数据内容、性质与质量；评估完整性一致性；识别模式和分布；为选择预处理工具和分析技术提供依据', focus: '数据探索', explanation: '数据探索是数据理解和预处理选择的重要基础。', alternatives: [] },
      { type: 'choice', question: '"职工人数"属于哪类数据？', options: ['连续型', '离散型', '标称型', '有序型'], answer: 'B', focus: '属性类型', explanation: '职工人数是可数的整数值，属于离散型数据。' },
      { type: 'choice', question: '"满意度等级"属于哪类数据？', options: ['连续型', '离散型', '标称型', '有序型'], answer: 'D', focus: '属性类型', explanation: '满意度等级有顺序但不能直接加减，属于有序型数据。' },
      { type: 'choice', question: '最容易受极端值影响的集中量数是？', options: ['均值', '中位数', '众数', '百分位数'], answer: 'A', focus: '集中量数', explanation: '均值使用全部数据求和平均，极端值会显著拉偏均值。' },
      { type: 'choice', question: 'Pearson相关系数主要衡量什么？', options: ['线性相关程度', '项集频繁程度', '分类标签数量', '簇内SSE'], answer: 'A', focus: '相关性量数', explanation: 'Pearson相关系数衡量两变量间的线性相关程度。' },
      { type: 'judge', question: '有序型数据有顺序差异，但不能直接按连续数值进行常规加减', answer: '对', focus: '属性类型', explanation: '有序型数据只表示等级或顺序关系，数值间隔不一定相等。' },
      { type: 'judge', question: '极差能反映最大值和最小值跨度，但受极端值影响大', answer: '对', focus: '差异量数', explanation: '极差=最大值-最小值，极端值直接决定了极差大小。' },
      { type: 'fill', question: 'MAD的中文含义是中位数____偏差', answer: '绝对', focus: '差异量数', explanation: 'MAD = Median Absolute Deviation，中位数绝对偏差。' },
      { type: 'fill', question: '协方差矩阵的非对角线元素是变量之间的____', answer: '协方差', focus: '协方差矩阵', explanation: '非对角线元素表示不同变量之间的协方差。' },
      { type: 'essay', question: '比较均值、中位数、众数在极端值影响下的差异', answer: '均值使用全部数值求和后平均受极端值影响大；中位数取排序后中间位置较稳健；众数取出现次数最多的值也不直接受极端数值大小影响但可能不唯一或不存在', focus: '集中量数对比', explanation: '三种集中量数对极端值的敏感度不同。', alternatives: [] },
      { type: 'choice', question: '销售额属于哪类数据？', options: ['连续型', '标称型', '有序型', '文本型'], answer: 'A', focus: '属性类型', explanation: '销售额是可取任意实数值的连续数据。' },
      { type: 'choice', question: '众数的含义是？', options: ['出现次数最多的值', '最大值减最小值', '排序后中间值', '变量变化趋势'], answer: 'A', focus: '集中量数', explanation: '众数是数据中出现频率最高的值。' },
      { type: 'judge', question: '同一变量与自身的协方差就是该变量的方差', answer: '对', focus: '相关性量数', explanation: 'Cov(X,X) = Var(X)，变量与自身的协方差等于方差。' },
      { type: 'fill', question: 'IQR代表中间____%数据的波动范围', answer: '50', focus: '差异量数', explanation: 'IQR = Q3 - Q1，覆盖中间50%的数据。' },
      { type: 'essay', question: '如何根据变量变化方向判断协方差正负？', answer: '两个变量同向变化时协方差为正；反向变化时协方差为负；同一变量的协方差就是方差', focus: '协方差', explanation: '协方差的符号反映变量间的变化方向关系。', alternatives: [] },
      { type: 'judge', question: '数据探索可帮助评估数据完整性和一致性', answer: '对', focus: '数据探索', explanation: '数据探索是了解数据质量的重要手段。' }
    ]
  },
  // Chapter 5 Quiz
  {
    title: '第五章 关联分析',
    questions: [
      { type: 'choice', question: '规则X=>Y的置信度表示什么？', options: ['X和Y同时出现占全部事务的比例', '包含X的事务中也包含Y的比例', 'Y出现占全部事务的比例', 'X与Y的距离'], answer: 'B', focus: '置信度', explanation: '置信度是条件概率P(Y|X)，即包含X的事务中也包含Y的比例。' },
      { type: 'choice', question: 'FP-Growth相对Apriori的核心优化是？', options: ['完全不需要数据', '用FP树压缩数据库并避免大量候选项集', '只计算均值', '只能处理两个商品'], answer: 'B', focus: 'FP-Growth', explanation: 'FP-Growth通过FP树压缩数据，不产生候选项集，效率更高。' },
      { type: 'fill', question: '提升度大于1表示前件和后件之间存在____相关', answer: '正', focus: '提升度', explanation: 'lift>1说明前件出现会促进后件出现，存在正相关。' },
      { type: 'judge', question: 'Apriori剪枝依据是非频繁项集的超集一定非频繁', answer: '对', focus: 'Apriori', explanation: '这是Apriori的先验性质：频繁项集的子集必频繁，非频繁项集的超集必非频繁。' },
      { type: 'essay', question: '10笔交易中，4笔同时买油条和豆浆，5笔买油条。计算{油条}=>{豆浆}的支持度和置信度', answer: '支持度=4/10=40%；置信度=4/5=80%', focus: '计算题', explanation: '支持度=同时出现次数/总事务数=4/10=40%；置信度=同时出现次数/前件出现次数=4/5=80%。', alternatives: [] },
      { type: 'choice', question: '强关联规则至少需要满足什么？', options: ['最小支持度和最小置信度', '最大SSE', '最小学习率', '最大欧氏距离'], answer: 'A', focus: '强关联规则', explanation: '强关联规则必须同时满足最小支持度和最小置信度阈值。' },
      { type: 'choice', question: '候选项集是指什么？', options: ['未经支持度检验的项集', '一定频繁的项集', '最终分类标签', '噪声点集合'], answer: 'A', focus: '核心概念', explanation: '候选项集是尚未通过支持度检验的项集，需要进一步验证。' },
      { type: 'choice', question: 'Apriori算法的主要瓶颈不包括哪项？', options: ['产生大量候选集', '多次扫描数据库', '计算开销大', '完全不需要候选集'], answer: 'D', focus: 'Apriori', explanation: 'Apriori需要产生候选集，"完全不需要候选集"是FP-Growth的特点。' },
      { type: 'choice', question: '若lift=1，通常表示规则前件和后件？', options: ['正相关', '负相关', '相互独立', '一定互斥'], answer: 'C', focus: '提升度', explanation: 'lift=1说明前件和后件的出现互不影响，相互独立。' },
      { type: 'judge', question: '支持度衡量规则适用于整个数据集的程度', answer: '对', focus: '支持度', explanation: '支持度以全部事务为分母，衡量规则覆盖全局的程度。' },
      { type: 'judge', question: '如果后件商品本身非常热门，高置信度规则可能有误导性', answer: '对', focus: '置信度局限', explanation: '后件本身支持度高时，即使与前件无关联，置信度也可能很高。' },
      { type: 'fill', question: '关联规则挖掘通常先产生频繁项集，再生成____', answer: '规则', focus: '两阶段框架', explanation: '先找频繁项集，再从频繁项集中生成满足置信度的关联规则。' },
      { type: 'fill', question: 'FP-Growth用____树压缩事务数据库', answer: 'FP', focus: 'FP-Growth', explanation: 'FP-Growth使用FP树（Frequent Pattern Tree）压缩存储事务数据。' },
      { type: 'essay', question: '为什么仅看支持度和置信度可能不够？提升度解决什么问题？', answer: '置信度会忽略后件本身支持度，后件很热门时可能产生伪高置信度规则。提升度衡量前件与后件的相关性', focus: '提升度', explanation: '提升度弥补了置信度不考虑后件基础概率的缺陷。', alternatives: [] },
      { type: 'essay', question: '比较Apriori和FP-Growth的核心差异', answer: 'Apriori基于候选项集产生和剪枝，广度搜索，可能多次扫描数据库并产生大量候选集；FP-Growth构建FP树压缩数据，不产生候选项集', focus: '算法对比', explanation: '两种算法在候选集处理和数据库扫描次数上有本质区别。', alternatives: [] },
      { type: 'choice', question: '项集{牛奶,面包,尿布}是几项集？', options: ['1项集', '2项集', '3项集', '4项集'], answer: 'C', focus: '核心概念', explanation: '包含3个物品的项集是3项集。' },
      { type: 'choice', question: '序列关联关系强调什么？', options: ['时间先后顺序', '均值为0', '类别标签', '簇中心'], answer: 'A', focus: '关联分析', explanation: '序列关联关系强调事件发生的时间先后顺序。' },
      { type: 'judge', question: 'FP树构建通常需要先扫描一次数据确定项的支持度计数', answer: '对', focus: 'FP-Growth', explanation: 'FP-Growth需要先扫描确定频繁项，再构建FP树。' },
      { type: 'fill', question: '规则X=>Y要求X交Y=____', answer: '空', focus: '关联规则', explanation: '关联规则中前件X和后件Y不能有交集，即X∩Y=空集。' },
      { type: 'essay', question: '解释"支持度看全局、置信度看局部"的含义', answer: '支持度以全部事务数为分母衡量X和Y共同出现占全体比例；置信度以包含X的事务为分母衡量已出现X时Y也出现的条件概率', focus: '支持度与置信度', explanation: '支持度是全局视角，置信度是条件概率的局部视角。', alternatives: [] }
    ]
  },
  // Chapter 6 Quiz
  {
    title: '第六章 分类预测',
    questions: [
      { type: 'choice', question: '决策树的叶节点通常存放什么？', options: ['属性测试', '类标号', '支持度', '学习率'], answer: 'B', focus: '决策树', explanation: '决策树的内部节点存放属性测试，叶节点存放类标号（预测结果）。' },
      { type: 'choice', question: '信息增益偏向选择哪类属性？', options: ['取值较少的属性', '取值较多的属性', '全是缺失值的属性', '与类别无关的属性'], answer: 'B', focus: '不纯度度量', explanation: '信息增益偏向取值多的属性，因为分支多会导致信息增益偏大。增益率可以改进这个问题。' },
      { type: 'fill', question: '朴素贝叶斯的核心简化假设是各特征条件____', answer: '独立', focus: '朴素贝叶斯', explanation: '朴素贝叶斯假设各特征在给定类别下条件独立，简化了计算。' },
      { type: 'judge', question: '训练误差很低而测试误差很高，通常是过拟合表现', answer: '对', focus: '过拟合', explanation: '过拟合的典型特征是训练集表现好但泛化能力差。' },
      { type: 'essay', question: '说明决策树剪枝的目的，并比较预剪枝和后剪枝', answer: '目的：防止过拟合。预剪枝在树生长过程中提前停止速度快但可能过早；后剪枝先让树完整生长再修剪效果较好但计算量大', focus: '剪枝', explanation: '两种剪枝策略在时机和效果上有所不同。', alternatives: [] },
      { type: 'choice', question: '分类训练样本必须包含什么？', options: ['属性值和类别标记', '只有商品编号', '只有无标签样本', '只有聚类中心'], answer: 'A', focus: '分类定义', explanation: '分类是有监督学习，训练样本必须同时包含属性值和对应的类别标记。' },
      { type: 'choice', question: 'Gini指数用于决策树时，通常选择什么划分？', options: ['Gini split最小', '支持度最大', 'SSE最大', '学习率最大'], answer: 'A', focus: '不纯度度量', explanation: '选择Gini split最小的划分，使子节点的纯度最高。' },
      { type: 'choice', question: 'KNN被称为惰性学习，主要因为？', options: ['训练阶段主要保存样本', '完全不使用样本', '必须先剪枝', '只计算置信度'], answer: 'A', focus: 'KNN', explanation: 'KNN在训练阶段不建立显式模型，主要保存训练样本，预测时才计算。' },
      { type: 'choice', question: 'SVM中核函数的主要作用是？', options: ['处理非线性问题', '删除缺失值', '生成频繁项集', '计算IQR'], answer: 'A', focus: 'SVM', explanation: '核函数将数据映射到高维空间，使非线性问题变为线性可分。' },
      { type: 'choice', question: '神经网络中损失函数的作用是？', options: ['度量预测误差', '执行数据集成', '生成类别编码', '计算支持度'], answer: 'A', focus: '神经网络', explanation: '损失函数度量模型预测值与真实值之间的误差。' },
      { type: 'judge', question: '后剪枝通常先让树完整生长，再修剪不必要分支', answer: '对', focus: '剪枝', explanation: '后剪枝先构建完整决策树，再自底向上修剪不影响泛化的分支。' },
      { type: 'judge', question: '朴素贝叶斯在实践中一定最优，因为它理论上有最小错误率', answer: '错', focus: '朴素贝叶斯', explanation: '条件独立假设在实际中往往不成立，因此实践中不一定最优。' },
      { type: 'fill', question: '信息增益率通过惩罚____多的属性来改进信息增益偏向', answer: '分支', focus: '不纯度度量', explanation: '信息增益率对分支多的属性施加惩罚，克服了信息增益的偏向问题。' },
      { type: 'fill', question: 'SVM在线性可分时寻找最大间隔____', answer: '超平面', focus: 'SVM', explanation: 'SVM寻找使两类间隔最大的超平面作为分类边界。' },
      { type: 'essay', question: '说明分类建模的一般流程', answer: '选择训练数据集；选择测试数据集或交叉验证；由训练集建立分类模型；用测试集评估准确率并修正；最后应用模型对未知样本分类', focus: '分类过程', explanation: '分类建模是一个从训练到评估再到应用的完整流程。', alternatives: [] },
      { type: 'essay', question: '为什么KNN使用欧氏距离前常需要标准化？', answer: 'KNN依赖距离计算，如果不同特征量纲差异大，数值范围大的特征会主导欧氏距离，标准化可减弱量纲影响', focus: 'KNN', explanation: '量纲差异会导致距离计算失真。', alternatives: [] },
      { type: 'choice', question: '逻辑回归虽然名字带回归，但主要用于？', options: ['分类', '聚类', '关联规则', '数据联邦'], answer: 'A', focus: '逻辑回归', explanation: '逻辑回归输出概率值，通过阈值判断类别，主要用于分类任务。' },
      { type: 'judge', question: '决策树对未知样本分类时，会沿根节点到叶节点的路径得到预测类别', answer: '对', focus: '决策树', explanation: '从根节点开始，按属性测试逐层向下，到达叶节点即为预测类别。' },
      { type: 'fill', question: '神经网络中反向传播用于计算____', answer: '梯度', focus: '神经网络', explanation: '反向传播算法计算损失函数关于各参数的梯度，用于参数更新。' },
      { type: 'essay', question: '简述朴素贝叶斯中先验概率、似然、后验概率的含义', answer: '先验概率是不看特征时某类出现概率；似然是某类中出现这些特征的概率；后验概率是看到特征后某类出现的概率', focus: '朴素贝叶斯', explanation: '贝叶斯公式：后验∝先验×似然。', alternatives: [] }
    ]
  },
  // Chapter 7 Quiz
  {
    title: '第七章 聚类分析',
    questions: [
      { type: 'choice', question: 'K-means通常使用什么作为簇的质心？', options: ['均值', '众数', '支持度', '后验概率'], answer: 'A', focus: 'K-means', explanation: 'K-means使用簇内所有点的均值作为质心。' },
      { type: 'choice', question: 'K-medoids相对K-means的一个优势是？', options: ['一定更快', '对噪声和极端值更鲁棒', '不需要距离度量', '只能处理文本'], answer: 'B', focus: 'K-medoids', explanation: 'K-medoids从实际样本点中选中心，不受极端值拉动，更鲁棒。' },
      { type: 'fill', question: 'K-means中常用____衡量簇的紧凑度', answer: 'SSE', focus: 'K-means', explanation: 'SSE（误差平方和）是衡量簇内数据点到质心距离总和的指标。', alternatives: ['sse', '误差平方和'] },
      { type: 'judge', question: '聚类属于无监督学习，不依赖预先给定的类别标签', answer: '对', focus: '聚类定义', explanation: '聚类是无监督学习，根据数据本身的相似性自动分组。' },
      { type: 'essay', question: '写出K-means算法步骤，并说明它的主要局限', answer: '步骤：选k个初始质心；按最近质心分配样本；重新计算质心；迭代直到质心不变或SSE不再优化。局限：需预设K，对初始质心和异常值敏感，不适合非球形簇', focus: 'K-means', explanation: 'K-means是经典聚类算法，理解其步骤和局限很重要。', alternatives: [] },
      { type: 'choice', question: '欧氏距离的核心含义是？', options: ['空间中两点直线距离', '各维绝对差之和', '规则置信度', '类别后验概率'], answer: 'A', focus: '距离度量', explanation: '欧氏距离是空间中两点之间的直线距离。' },
      { type: 'choice', question: '曼哈顿距离通常计算为？', options: ['各维绝对差之和', '夹角余弦', '均方误差', '支持度计数'], answer: 'A', focus: '距离度量', explanation: '曼哈顿距离是各维度差的绝对值之和，类似网格路径距离。' },
      { type: 'choice', question: '余弦相似度更关注向量的什么？', options: ['方向', '绝对长度', '样本标签', '事务总数'], answer: 'A', focus: '距离度量', explanation: '余弦相似度衡量向量方向的相似程度，不关注绝对长度。' },
      { type: 'choice', question: 'K-means中"离散质心法"的风险之一是？', options: ['可能选中离群点', '无法指定K', '不需要计算距离', '只能用于分类'], answer: 'A', focus: 'K-means', explanation: '离散质心法可能恰好选中离群点作为初始质心，影响聚类效果。' },
      { type: 'choice', question: 'DBSCAN的两个重要参数是？', options: ['eps和MinPts', 'minsup和minconf', 'TP和FP', 'Q1和Q3'], answer: 'A', focus: 'DBSCAN', explanation: 'DBSCAN通过eps（邻域半径）和MinPts（最小点数）两个参数控制聚类。' },
      { type: 'judge', question: 'K-means适合所有任意形状、任意密度的簇', answer: '错', focus: 'K-means局限', explanation: 'K-means适合球形簇，对任意形状和不同密度的簇效果较差。' },
      { type: 'judge', question: '使用欧氏距离时，均值作为质心可使SSE达到理论最小', answer: '对', focus: 'K-means', explanation: '数学上可证明均值是使SSE最小的质心选择。' },
      { type: 'fill', question: 'K-medoids的中心点必须从____点中选取', answer: '样本', focus: 'K-medoids', explanation: 'K-medoids要求中心点必须是实际的样本点。', alternatives: ['实际样本', '样本'] },
      { type: 'fill', question: 'K-means算法通常迭代到质心不再变化或____不再变优', answer: 'SSE', focus: 'K-means', explanation: 'K-means在SSE不再显著减小或质心稳定时停止迭代。' },
      { type: 'essay', question: '比较欧氏距离、曼哈顿距离、余弦相似度的适用场景', answer: '欧氏距离适合连续数值数据中的直线距离；曼哈顿距离适合网格路径；余弦相似度关注方向常用于文本和高维稀疏数据', focus: '距离度量对比', explanation: '不同距离度量适用于不同的数据类型和应用场景。', alternatives: [] },
      { type: 'essay', question: '为什么K-means对异常值敏感？K-medoids如何改善？', answer: 'K-means使用均值作质心极端值会拉动均值导致质心偏移。K-medoids从实际样本点中选中心点以绝对误差和为标准对极端值更鲁棒', focus: 'K-means vs K-medoids', explanation: '均值受极端值影响是K-means的主要弱点。', alternatives: [] },
      { type: 'choice', question: '层次聚类常用什么形式表示聚类过程？', options: ['树状图', '混淆矩阵', 'FP树', 'ROC曲线'], answer: 'A', focus: '层次聚类', explanation: '层次聚类通过树状图（Dendrogram）直观展示聚类过程。' },
      { type: 'judge', question: 'K-means每个数据元素属于且仅属于一个簇', answer: '对', focus: 'K-means', explanation: 'K-means是硬聚类，每个样本只属于一个簇。' },
      { type: 'fill', question: 'K-means对初始____敏感', answer: '质心', focus: 'K-means', explanation: '不同的初始质心选择可能导致不同的聚类结果。' },
      { type: 'essay', question: '列出K-means初始质心选择的几种方法', answer: '随机选择；多次运行选最小SSE；使用层次聚类提取质心；离散质心法（可能选中离群点且计算开销大）', focus: 'K-means初始化', explanation: '初始质心的选择对K-means结果有重要影响。', alternatives: [] }
    ]
  },
  // Chapter 8 Quiz
  {
    title: '第八章 回归分析与模型评价',
    questions: [
      { type: 'choice', question: '训练集准确率很高而测试集准确率低，通常说明什么？', options: ['过拟合', '欠拟合', '数据集成成功', '聚类完成'], answer: 'A', focus: '过拟合', explanation: '训练好测试差是过拟合的典型特征，模型记住了训练数据的噪声。' },
      { type: 'choice', question: '疾病筛查场景通常更重视哪个指标？', options: ['召回率', '页面访问量', '支持度', 'SSE'], answer: 'A', focus: '场景判断', explanation: '疾病筛查不能漏掉患者，因此更重视召回率。' },
      { type: 'fill', question: 'F1值是精确率和召回率的____平均', answer: '调和', focus: 'F1值', explanation: 'F1 = 2×P×R/(P+R)，是精确率和召回率的调和平均。' },
      { type: 'judge', question: '回归任务预测连续数值，分类任务预测离散类别标签', answer: '对', focus: '分类与回归', explanation: '这是分类和回归的根本区别。' },
      { type: 'essay', question: '说明精确率、召回率、F1值分别适合回答什么问题', answer: '精确率回答预测为正的样本中有多少是真的；召回率回答实际为正的样本中找回了多少；F1综合二者适合需要兼顾的场景', focus: '分类评价', explanation: '不同指标回答不同角度的问题。', alternatives: [] },
      { type: 'choice', question: '精确率的分母是什么？', options: ['预测为正的样本', '实际为正的样本', '全部样本', '实际为负的样本'], answer: 'A', focus: '精确率', explanation: '精确率 = TP/(TP+FP)，分母是预测为正的样本数。' },
      { type: 'choice', question: '召回率的分母是什么？', options: ['预测为正的样本', '实际为正的样本', '预测为负的样本', '全部负样本'], answer: 'B', focus: '召回率', explanation: '召回率 = TP/(TP+FN)，分母是实际为正的样本数。' },
      { type: 'choice', question: '训练集和测试集表现都很差，通常说明什么？', options: ['欠拟合', '过拟合', '强关联规则', '数据联邦'], answer: 'A', focus: '欠拟合', explanation: '训练和测试都差说明模型没有学到有效模式，属于欠拟合。' },
      { type: 'choice', question: '下列哪项属于回归评价指标？', options: ['MSE', '置信度', '支持度', 'Gini split'], answer: 'A', focus: '回归评价', explanation: 'MSE（均方误差）是典型的回归评价指标。' },
      { type: 'choice', question: '下列哪项不是处理过拟合的常见方法？', options: ['正则化', '剪枝', '交叉验证', '故意增加模型复杂度并记忆训练集'], answer: 'D', focus: '过拟合处理', explanation: '增加模型复杂度会加剧过拟合，而不是缓解。' },
      { type: 'judge', question: '垃圾短信拦截通常需要兼顾精确率和召回率', answer: '对', focus: '场景判断', explanation: '精确率太低会误拦正常短信，召回率太低会漏掉垃圾短信，需兼顾。' },
      { type: 'judge', question: 'F1值适合完全不关心召回率的场景', answer: '错', focus: 'F1值', explanation: 'F1是精确率和召回率的调和平均，同时考虑两者。' },
      { type: 'fill', question: 'ROC/AUC属于____评价指标', answer: '分类', focus: '分类评价', explanation: 'ROC曲线和AUC值是分类模型的评价指标。' },
      { type: 'fill', question: 'R²属于____评价指标', answer: '回归', focus: '回归评价', explanation: 'R²（决定系数）是回归模型的评价指标。' },
      { type: 'essay', question: '给出过拟合和欠拟合的表现，并列出处理过拟合的方法', answer: '过拟合：训练集表现好测试集表现差；欠拟合：训练和测试表现都差。处理：增加数据、正则化、剪枝、交叉验证、早停、降低模型复杂度', focus: '过拟合与欠拟合', explanation: '理解过拟合和欠拟合的区别及应对方法是关键。', alternatives: [] },
      { type: 'essay', question: '说明TP、FP、TN、FN四个概念', answer: 'TP实际为正且预测为正；FP实际为负但预测为正；TN实际为负且预测为负；FN实际为正但预测为负', focus: '混淆矩阵', explanation: '这四个概念是分类评价的基础。', alternatives: [] },
      { type: 'choice', question: 'MAE属于哪类评价指标？', options: ['回归评价', '关联规则评价', '聚类初始化', 'OLAP操作'], answer: 'A', focus: '回归评价', explanation: 'MAE（平均绝对误差）是回归评价指标。' },
      { type: 'judge', question: '早停可以作为缓解过拟合的方法之一', answer: '对', focus: '过拟合处理', explanation: '早停在验证集误差不再下降时停止训练，防止过拟合。' },
      { type: 'fill', question: '实际为正却被预测为负的样本称为____', answer: 'FN', focus: '混淆矩阵', explanation: 'FN（False Negative）即假负例，实际为正但被预测为负。', alternatives: ['假负例', 'fn'] },
      { type: 'essay', question: '为什么F1适合需要兼顾精确率和召回率的场景？', answer: 'F1是精确率和召回率的调和平均，单独精确率或召回率可能偏向一侧，F1能综合反映二者平衡情况', focus: 'F1值', explanation: '调和平均的特性使得F1对较低的值更敏感。', alternatives: [] }
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
  { icon: '📕', name: '教材PDF', desc: '数据挖掘原理与应用（葛东旭）', path: 'files/textbook.pdf' },
  { icon: '📋', name: '复习大纲PDF', desc: '期末复习大纲', path: 'files/outline.pdf' },
  { icon: '📄', name: '复习大纲Word', desc: '复习大纲docx版', path: 'files/outline.docx' }
];
