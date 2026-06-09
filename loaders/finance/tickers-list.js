const bloque1 = [
"AAPL","MSFT","GOOGL","GOOG","AMZN","TSLA","META","NVDA","BRK-B","BRK-A",
"UNH","V","JNJ","WMT","JPM","MA","PG","HD","XOM","BAC","CVX","DIS","ABBV",
"KO","PEP","AVGO","PFE","ADBE","CSCO","TMO","CMCSA","ABT","NKE","ORCL",
"CRM","MCD","DHR","ACN","COST","WFC","TXN","QCOM","MDT","BMY","NEE","SBUX",
"LIN","HON","UPS","IBM","RTX","LOW","AMGN","SPGI","CVS","BLK","CAT","BA",
"GS","MS","DE","LMT","GE","TJX","GILD","ISRG","SYK","BKNG","MMC","INTU",
"PLD","CB","BDX","NOW","CI","MO","AMT","USB","MDLZ","CME","VRTX","ADI",
"REGN","PNC","SO","ZTS","DUK","ITW","APD","NSC","CL","ECL","AON","HUM",
"EMR","CDNS","ETN","MCO","ROP","AEP","D","A","CTAS","WELL","TGT","EXC",
"VLO","ADP","TRV","PSA","FDX","CMI","MRK","HCA","LHX","HES","ROST","RSG",
"WM","ALL","HPQ","KLAC","MNST","MAR","PH","FTNT","ILMN","LRCX","VICI",
"TJX","PAYX","CEG","KMB","KMI","SRE","ED","STE","ORLY","FITB","ADM","DAL",
"TEL","BKR","LEN","CSX","HAL","O","DXCM","GLW","KHC","CNC","BIIB","PPG",
"F","MTB","DLR","EOG","IDXX","AIG","EXR","PRU","AFL","WST","PSX","MKC",
"TSCO","HIG","WMB","AVB","MCK","NUE","PEG","PHM","TRMB","KDP","VRSK","MAS",
"NVR","PAYC","CMS","WDC","OTIS","FIS","J","MTD","SWKS","CARR","MLM","CTSH",
"CCL","KEYS","EPAM","SWK","EBAY","OKE","FAST","WAB","AWK","VTRS","VFC","CPRT",
"ULTA","HUM","CQP","RMD","CHTR","NEE","APTV","PPD","SIVB","BAX","IR","LEN.B",
"KEY","GPN","WEC","CFG","HLT","WAT","TSN","NDAQ","WHR","HSY","AVY","AMP",
"LKQ","NOC","COF","RCL","CAG","HUBB","HPE","TT","UAL","UALC","JBL","WELL",
"ZBRA","RJF","BBY","AKAM","CMS","HOLX","CFG","JCI","ALLE","VTR","RF","GL",
"VMC","OMC","VRT","NTAP","PWR","DTE","PSX","GME","WIX","ESS","NWSA","TPR",
"VST","TROW","JEF","MOS","HAS","LKQ","HBAN","DRI","NFLX","LYB","CAH","TXT",
"CPB","MPWR","FANG","AVTR","CAKE","WRB","LNT","TTWO","HII","STX","NTES",
"CIEN","NWS","SJM","HST","PPL","TSLA","MSCI","MKTX","ES","EQT","FTV","CLX",
"IRM","SYF","POOL","COO","HFC","IP","JKHY","XEL","BALL","NRG","TFX","MTD",
"OGN","WOLF","SEDG","NTRS","TYL","WRK","QRVO","UHS","HAS","LAW","CCS","DHI",
"MOS","SNA","GFL","ATO","CVNA","BBWI","EVRG","EXPE","CDW","CAH","OGE","AEE"
];

const bloque2 = [
"AES","CTRA","DPZ","GRMN","KIM","RGA","CNP","FSLR","PFG","BXP","IEX","MOSB",
"PNR","RF","ALLE","HWM","LW","CE","EPD","LUV","FMC","STT","TXT","HPP","DOC",
"VNO","APA","BWA","CLF","CF","MRO","NEM","ZION","MPC","NWL","KMX","CMA",
"SCHW","HBAN","KEY","FITB","CFG","EWBC","SNV","FHN","TFIN","FCNCA","CIB",
"ACHC","AER","AAN","RE","WTW","WRK","WY","WSC","WAL","TOL","TPX","TJX","TDY",
"TDG","TAP","SYY","SWAV","SWN","SWK","SWKS","SSNC","SSB","SPOT","SPB","SPLK",
"SMCI","SJM","SIVB","SHW","SGEN","SGFY","SEE","SEDG","SBUX","SBAC","SBNY",
"SAX","SATS","SAR","SAP","SAN","SAM","SAIA","RTX","RVLV","RVT","RYN","RYAAY",
"RY","RWT","RSG","RST","RS","RRC","RPT","RPRX","RPM","RPD","ROKU","ROK",
"RJF","RIO","RHI","RF","REXR","REG","RDN","RCL","RGA","RDFN","RBA","RARE",
"RAMP","QTT","QTWO","QSR","QRVO","QGEN","QCOM","QDEL","PYPL","PVH","PXD",
"PWR","PSTG","PSX","PSA","PRU","PRGO","PRFT","PRI","PPL","PPG","PPBI","PP",
"POR","POOL","PNW","PNC","PM","PLL","PKG","PK","PINS","PHR","PHM","PH","PFE",
"PEGA","PEG","PECO","PAYC","PAYX","PAY","PAX","PATH","PARR","PARA","PALM",
"OXM","OVV","OUT","OTIS","OSUR","OSK","ORI","ORCL","ORAN","OQ","ONTF","ONE",
"OMC","OLED","OKTA","OKE","OII","OHI","OGN","OFC","ODFL","ODC","OC","O",
"NVDA","NVCR","NTNX","NTLA","NTAP","NTCO","NSIT","NSC","NRG","NR","NOMD",
"NOK","NOC","NMRK","NMR","NKE","NKLA","NI","NFG","NEWR","NEU","NET","NEE",
"NCLH","NCR","NBR","NAT","NASH","NAPA","NANR","NADL","NAC","N","MYRG",
"MYGN","MYE","MYCC","MY","MXIM","MX","MWA","MVIS","MUSA","MSM","MSGS","MSFT",
"MSCI","MPLX","MPC","MP","MOS","MPAA","MNSO","MNST","MNKD","MN","MLTX","MLM",
"MKTX","MKSI","MKL","MJN","MJCO","MIDD","MIC","MHK","MGM","MET","META",
"MENT","MEG","MDT","MDGL","MDB","MCO","MCHP","MCFG","MCB","MBUU","MBLY",
"MBI","MBB","MAY","MAT","MAS","MAR","MANU","MANH","MAN","MAM","MAA","MA",
"LVS","LVHD","LUMN","LUB","LRCX","LPX","LPLA","LNG","LMT","LLY","LLAP","LL",
"LKQ","LHX","LHCG","LH","LFC","LEVI","LEN","LEG","LEA","LDOS","LDF","LCID",
"LCC","LBRDA","LBTYA","LBRT","LBR","LB","LAX","LANC","LAMR","LAC","L","KR",
"KRG","KRNY","KRE","KRC","KRBN","KR","KOS","KORE","KOPN","KOD","KNX","KMT",
"KMI","KMB","KLC","KKR","KIM","KEYS","KEY","KEN","KE","KDP","KD","KBWB","K",
"JWN","JXN","JWN","JWN","JWN","JWN","JWN","JXN","JX","JPM","JLL","JHG","JCI",
"JAZZ","J","ITW","IT","ISRG","IQV","IP","INO","INCY","INFO","ILMN","IDXX",
"IDCC","ICE","IBM","IBKR","IAC","IAA","I","HZO","HZNP","HWM","HUBS","HST",
"HRB","HR","HPE","HP","HOLX","HOG","HES","HELE","HEI","HD","HCAT","HCA",
"HBAN","HAS","HAL","HAE","H","GWW","GWRE","GWPH","GVA","GTLS","GTES",
"GSHD","GS","GRUB","GRMN","GRFS","GPC","GOOS","GOOG","GLW","GLBE","GKOS",
"GIII","GILD","GFL","GE","GD","GCO","GCI","GBTC","GBNY"
];

const bloque3 = [
"GDX","GDRX","GDS","GDDY","GBX","GATX","GART","GAP","GAN","GAIA","GAB","G",
"FUTU","FUL","FUBO","FTV","FTR","FTNT","FTAI","FSV","FSM","FSP","FSK","FSI",
"FSCT","FS","FRO","FREY","FRE","FPRX","FNV","FNF","FNA","FMC","FLWS","FLR",
"FLL","FLIC","FLGT","FLEX","FL","FIVE","FITB","FISV","FIS","FINS","FINV",
"FINL","FHN","FHI","FHF","FGEN","FG","FEYE","FE","FDX","FDP","FDCF","FCX",
"FCEL","FCCO","FC","FBHS","FB","FARO","FANG","FANG","FAMI","FAF","F","EYE",
"EXTR","EXPR","EXOM","EXLS","EXEL","EXC","EXAS","EX","EWBC","EW","EVRG",
"EVOP","EVH","EVBG","EVA","EURN","EUCR","ETSY","ETR","ETE","ET","ESRT","ESP",
"ESPR","ESNT","ES","ERIE","EQX","EQT","EQR","EQ","EPAM","EOG","ENPH",
"ENLC","ENFN","ENDP","ENB","EMR","EMN","EME","ELV","EL","EIX","EHTH","EHC",
"EHT","EGP","EGO","EGBN","EFC","EEFT","EDU","EDR","ED","ECVT","ECOM","ECL",
"EC","EBS","EBR","EBND","EBIX","EBAY","EAT","EARN","EA","E","DVN","DVA",
"DUK","DTE","DT","DSX","DSGX","DS","DRE","DRI","DOW","DORM","DO","DOCU",
"DOC","DNUT","DNLI","DNP","DNMR","DKS","DK","DIG","DGX","DHI","DHR","DG",
"DEO","DE","DDOG","DD","DCP","DCI","DBX","DBRG","DBNR","DBI","DB","DAWN",
"DAVA","DAR","DAN","DAL","D","CZOO","CZR","CWT","CWH","CWEN","CW","CVX",
"CVS","CVGW","CVA","CUTR","CUZ","CUK","CUBE","CTXS","CTS","CTRE","CTRL",
"CTRA","CTLT","CTKB","CTAS","CTAH","CSWC","CSU","CSIQ","CSGP","CSCO","CSAN",
"CRWD","CRUS","CROX","CRNC","CRL","CRI","CRGU","CRH","CRDF","CRBP","CR",
"CPRT","CPNG","CPLP","CPL","CPK","CP","COUP","COTY","COOP","COO","COP",
"CON","COIN","COHU","COF","CMPR","CMP","CMG","CMA","CM","CLVT","CLX","CLW",
"CLSK","CLII","CLF","CLDT","CLB","CIVI","CIT","CINT","CINF","CIAS","CI",
"CHWY","CHTR","CHNG","CHK","CHGG","CHD","CHF","CHDN","CHCT","CHCO","CHH",
"CHD","CHKP","CHCI","CHEF","CHE","CHD","CHAS","CHAP","CHA","CFX","CFLT",
"CF","CES","CERE","CEQP","CENT","CEM","CELH","CEL","CEIX","CEG","CDW","CDNS",
"CDEV","CDAY","CD","CCXI","CCO","CCL","CCJ","CCA","CC","CBRE","CB","CATY",
"CAT","CASY","CARR","CARB","CARA","CAPL","CAKE","CABO","CAAP","C","BZUN",
"BYND","BYD","BXP","BWXT","BWMX","BWEN","BW","BVN","BURL","BUR","BUJA",
"BUCY","BUD","BSY","BSW","BSMX","BSL","BSC","BSBR","BS","BRZE","BROS","BRO",
"BRKR","BRK-B","BRK-A","BRFS","BRCC","BRBR","BR","BPY","BP","BOXL","BOKF",
"BNS","BNRL","BN","BMRC","BMRN","BMI","BME","BLZE","BLMN","BL","BKNG","BK",
"BJRI","BJ","BHVN","BHP","BHIL","BFYT","BFRI","BF-B","BF-A","BF","BEP","BEN",
"BELL","BEL","BEKE","BECN","BE","BDX","BDRY","BDN","BDC","BD","BCPC","BCO",
"BCNX","BCML","BC","BBY","BBWI","BBW","BBVA","BBT","BBBY","BB","BAX","BATT",
"BA","BAM","BALL","BABA","BAC","B","AZO","AZEK","AZN","AZ","AXTA","AXS",
"AXON","AXP","AXL","AXLA","AXGN","AXE","AWRE","AVXL","AVY","AVTR","AVT",
"AVNS","AVLR","AVGO","AVD","AVA","ATVI","ATSG","ATKR","ATI","ATEN","ATCO",
"AT","ASX","ASSA","ASO","ASH","ASGN","ASG","ASDN","ASB","AS","ARVL","ARRY",
"ARR","AROC","ARMK","ARLO","ARI","ARGO","ARG","AR","APTV","APOG","APLS",
"APLD","APLE","APGY","APD","APAM","AOBC","ANZU","ANTM","ANT","ANF","ANDE",
"ANAB","AN","AMZN","AMWD","AMT","AMP","AMN","AMKR","AMGP","AMGN","AMCX",
"ALTR","ALRM","ALNY","ALLY","ALLK","ALL","ALGN","ALDX","AL","AKUS","AIZ",
"AIRC","AIR","AIG","AEO","AEHR","AEE","AEM","AEL","AEIS","AEE","AE",
"ADXS","ADTN","ADSK","ADS","ADP","ADMA","ADM","ADIL","ADI","ADHB","ADBE",
"ACWI","ACVA","ACOR","ACM","ACGL","ACB","ACA","ABUS","ABNB","ABM","ABG",
"ABEV","ABBV","ABB","AAPL","AAWW","AAON","AAL","AA","A"
];

const bloque4 = [
"ZWS","ZUMZ","ZTO","ZTS","ZS","ZROZ","ZPIN","ZNH","ZM","ZIM","ZETA","ZEUS",
"ZEB","ZD","ZBH","Z","ZBRA","ZAZA","YUMC","YUM","YSG","YPF","YOLO","YMAB",
"YELP","YETI","YELL","Y","XRX","XPO","XPEL","XP","XOM","XNET","XME","XLU",
"XLRE","XLF","XLK","XLC","XLE","XHB","XEL","XEC","XBIT","XBIO","XBI","X"
,"WWE","WVVI","WVFC","WVE","WV","WUXI","WTW","WTFC","WTER","WSTG","WST",
"WSR","WSM","WSFS","WSBC","WS","WRLD","WRK","WPM","WOR","WOOF","WOO","WMT",
"WMG","WM","WLY","WLFC","WKB","WK","WIPRO","WING","WIM","WILC","WIFI","WHR",
"WHG","WHF","WES","WEN","WELL","WEED","WEAV","WE","WDC","WDAY","WCN","WCC",
"WBS","WBA","WAT","WASH","WAVD","WST","WAS","W","VZ","VTRS","VRTX","VST",
"VSAT","VRNT","VRM","VRCA","VRAY","VRA","VNO","VNOM","VLO","VLD","VIRT",
"VIR","VIP","VIH","VICI","VIAC","VHT","VFC","VEEV","VEA","VCYT","VCP",
"VCO","VCIT","VC","VBIV","VBAI","VAW","VAL","VAC","VA","UZF","UZ","UYI",
"UY","UXIN","UZA","UZ","UX","UXN","UUU","UU","UTZ","UTRN","UTL","UTHR",
"UTG","UTF","UTEK","UTEC","UTBK","UTA","USWS","USX","USVT","USOI","USNA",
"USLU","USL","USIO","USG","USEG","USDU","USBN","USB","USA","URBN","URC",
"UPWK","UPST","UPS","UP","UONE","UHS","UHAL","UCBI","U","TZOO","TZAC","TYL",
"TXRH","TXN","TXG","TX","TWOU","TWLO","TW","TWI","TWT","TWST","TWI","TW",
"TVTY","TVIX","TV","TVC","TUP","TTWO","TTMI","TTGT","TTC","TXT","TTE",
"TSLA","TSCO","TS","TRTN","TRMB","TRIP","TRGP","TRMD","TRIP","TRI","TROW",
"TROX","TRNO","TRMK","TRIN","TRHC","TRGP","TR","TQQQ","TPTX","TPR","TPB",
"TP","TOM","TOL","TNDM","TNC","TMR","TME","TM","TLRY","TLK","TLH","TL",
"TKR","TKNO","TJX","TIXT","TIGO","TIF","THR","THO","TH","TGNA","TGI","TGEN",
"TFC","TEVA","TENB","TEN","TEAM","TDUP","TDS","TDP","TDOC","TDG","TDC",
"TD","TCOM","TCS","TCBI","TC","TBPH","TB","TAP","TAN","TAL","T","SYY","SYK",
"SY","SWX","SWN","SWK","SWCH","SWBI","SW","SVRA","SV","SUV","SUS","STZ",
"STVN","STT","STRL","STOR","STON","STNE","STLD","STLA","STK","SITE","SIRI",
"SIMO","SILV","SIFY","SIGN","SIG","SID","SHU","SHLS","SHI","SHAK","SFST",
"SFM","SFD","SFBC","SF","SET","SES","SENS","SE","SDRL","SD","SCS","SCOR",
"SCO","SCM","SC","SBOW","SBH","SBE","SAVA","SATS","SAR","SAP","SAN","SAM",
"SAIC","SAFE","SABR","S","RXT","RWT","RUSH","RUSHA","RUS","RUM","RXL","RWT",
"RWT","RTX","RTW","RTO","RSM","RPT","RRC","RRC","RPRX","RP","RON","ROL",
"RJF","RGNX","RGCO","RGEN","RF","REVG","RETA","REPL","RELX","REKR","REGN",
"REG","REED","REE","REDU","RDN","RDFN","RD","RCUS","RCL","RCI","RC","RBT",
"RBB","RB","RARE","RAPT","RAMP","R","QTT","QTWO","QDEL","QCOM","QGEN","PYPL",
"PVH","PWR","PSX","PSFE","PRU","PRO","PRI","PPL","PPG","PPBI","POR","POOL",
"POL","PNW","PNR","PNM","PMT","PM","PLL","PKI","PINS","PHR","PHM","PH",
"PFE","PEP","PEG","PD","PAYX","PAX","PATH","PARR","PARA","PALM","PAAS","OXY",
"OVV","OVER","OUT","OTIS","OSUR","OSK","ORI","ORCL","OR","OPA","OPAD",
"ONON","ONL","OMC","OM","OLD","OLED","OKTA","OKE","OIS","OII","OGN","OG",
"OFC","OC","O","OZK"
];

const ibex35 = [
  "CABK.MC",
  "ACS.MC",
  "AENA.MC",
  "SAN.MC",
  "FDR.MC",
  "COL.MC",
  "BKT.MC",
  "PUIG.MC",
  "RED.MC",
  "FER.MC",
  "IAG.MC",
  "LOG.MC",
  "ENG.MC",
  "ACX.MC",
  "UNI.MC",
  "CLNX.MC",
  "ITX.MC",
  "BBVA.MC",
  "AMS.MC",
  "ELE.MC",
  "ANE.MC",
  "MRL.MC",
  "MTS.MC",
  "IBE.MC",
  "NTGY.MC",
  "SAB.MC",
  "GRF.MC",
  "MAP.MC",
  "TEF.MC",
  "ANA.MC"
];

const cac40 = [
  "MC.PA",  // LVMH Moët Hennessy - Louis Vuitton SE
  "SU.PA",  // Schneider Electric SE
  "TTE.PA", // TotalEnergies SE
  "AIR.PA", // Airbus SE
  "SAF.PA", // Safran SA
  "AI.PA",  // Air Liquide SA
  "SAN.PA", // Sanofi
  "OR.PA",  // L'Oréal SA
  "BNP.PA", // BNP Paribas SA
  "CS.PA",  // AXA SA
  "EL.PA",  // EssilorLuxottica
  "DG.PA",  // VINCI
  "SGO.PA", // Saint-Gobain
  "BN.PA",  // Danone
  "ENGI.PA",// ENGIE
  "ACA.PA", // Crédit Agricole
  "CAP.PA", // Capgemini
  "PUB.PA", // Publicis Groupe
  "VIE.PA", // Veolia Environnement
  "DSY.PA", // Dassault Systèmes
  "STLAP.PA",// Stellantis NV
  "RI.PA",  // Pernod Ricard
  "URW.PA", // Unibail-Rodamco-WE
  "AC.PA",  // Accor
  "LR.PA",  // Legrand
  "ORA.PA", // Orange
  "ML.PA",  // Michelin
  "ERF.PA", // Eurofins Scientific
  "RNO.PA", // Renault
  "TEP.PA", // Teleperformance
  "VIE.PA"  // Veolia (repetido si aparece doble)
];

const dax40Tickers = [
  "SY1.DE",
  "HEI.DE",
  "SIE.DE",
  "G1A.DE",
  "DHL.DE",
  "DTE.DE",
  "FME.DE",
  "CON.DE",
  "DB1.DE",
  "MRK.DE",
  "G24.DE",
  "VOW3.DE",
  "ENR.DE",
  "BEI.DE",
  "SHL.DE",
  "BMW.DE",
  "BAS.DE",
  "DTG.DE",
  "VNA.DE",
  "FRE.DE",
  "DBK.DE",
  "IFX.DE",
  "HNR1.DE",
  "ALV.DE",
  "AIR.DE",
  "ADS.DE",
  "MTX.DE",
  "BAYN.DE",
  "RWE.DE",
  "ZAL.DE"
];

const chinaTickers = [
  "0700.HK",
  "9988.HK",
  "00939.HK",
  "1810.HK",
  "PDD",
  "3690.HK",
  "01398.HK",
  "02318.HK",
  "9999.HK",
  "01211.HK"
];

export { bloque1, bloque2, bloque3, bloque4, 
  ibex35, cac40, dax40Tickers, chinaTickers };