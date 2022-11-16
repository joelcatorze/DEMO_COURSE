﻿window.globalProvideData('slide', '{"title":"Scenario 1: Employee called to report tested positive for covid","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":1,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide1","width":960,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5jj3YQXA8i0","actionGroups":{"ReviewInt_5o5whjbtQdu":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6rmWZwGuJPp"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5o5whjbtQdu","typea":"var","valueb":"6QmShANnwxg","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000100101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6QmShANnwxg.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5o5whjbtQdu"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6QmShANnwxg.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5o5whjbtQdu"}]}]}]},"ReviewIntCorrectIncorrect_5o5whjbtQdu":{"kind":"actiongroup","actions":[]},"AnsweredInt_5o5whjbtQdu":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5o5whjbtQdu"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000100101"}]}]},"DisableChoices_5o5whjbtQdu":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6rmWZwGuJPp"},"enabled":{"type":"boolean","value":false}}]},"5o5whjbtQdu_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6Ak1nX2palV.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5o5whjbtQdu"}]}]},"SetLayout_pxabnsnfns00000100101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000100101"}]}]},"NavigationRestrictionPreviousSlide_5jj3YQXA8i0":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]},{"kind":"adjustvar","variable":"_player.TMS1","operator":"set","value":{"type":"var","value":"_player.#Scenario1"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6rmWZwGuJPp.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6Ak1nX2palV"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5f1DHsmuttg.InvalidPromptSlide"}}]},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5xOAxxbyGKO.5d9GVu61Cjs"}}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000100101"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5f1DHsmuttg","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5f1DHsmuttg","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5o5whjbtQdu","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5o5whjbtQdu"}],"elseActions":[{"kind":"exe_actiongroup","id":"5o5whjbtQdu_CheckAnswered"}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5jj3YQXA8i0"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":1000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5qwzxGBlD3f"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6rmWZwGuJPp"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69mmjdYEbCo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6U9qTbk13Dk"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5w4REuQMbK7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5jIEuJRb9QN"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":479,"rotateYPos":269.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":541,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":-1,"yPos":-1,"width":961,"height":542,"strokewidth":1}},"width":959,"height":540,"resume":true,"useHandCursor":true,"id":"5qwzxGBlD3f"},{"kind":"textinput","bindto":"_player.TMS1","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":256,"placeholder":"type your text here","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":48,"yPos":-46,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":431.5,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6rmWZwGuJPp","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":844,"height":30,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":131,"bottom":20,"pngfb":false,"pr":{"l":"Lib","i":2}}},"html5data":{"xPos":0,"yPos":0,"width":864,"height":30,"strokewidth":1}},"width":864,"height":30,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":865,"bottom":31,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":1}}},"id":"6rmWZwGuJPp","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TMS1","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.6Ak1nX2palV"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"69mmjdYEbCo_1034464150","id":"01","linkId":"txt__default_69mmjdYEbCo","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":844,"height":34,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Scenario 1: Employee called to report tested positive for covid","style":{"fontIsBold":false,"foregroundColor":"#000000","linkColor":"#000000","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.201}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":63,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":719,"bottom":39,"pngfb":false,"pr":{"l":"Lib","i":4}}}],"shapemaskId":"","xPos":48,"yPos":-106,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":432,"rotateYPos":22,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":864,"bottom":44,"altText":"Scenario 1: Employee called to report tested positive for covid","pngfb":false,"pr":{"l":"Lib","i":3}},"html5data":{"xPos":0,"yPos":0,"width":864,"height":44,"strokewidth":0}},"width":864,"height":44,"resume":true,"useHandCursor":true,"id":"69mmjdYEbCo"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6U9qTbk13Dk_1974363244","id":"01","linkId":"txt__default_6U9qTbk13Dk","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":501,"height":80,"valign":"top","wordwrap":false,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Saving your data…","style":{"fontSize":44,"foregroundColor":"#F69B35","linkColor":"#F69B35","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":62.706,"descent":17.188,"leading":0,"underlinePosition":-4.411,"underlineThickness":2.922,"xHeight":31.396}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":17,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":511,"bottom":85,"pngfb":false,"pr":{"l":"Lib","i":6}}}],"shapemaskId":"","xPos":219,"yPos":225,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":260.5,"rotateYPos":45,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":521,"bottom":90,"altText":"Saving your data…","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":0,"yPos":0,"width":521,"height":90,"strokewidth":0}},"width":521,"height":90,"resume":true,"useHandCursor":true,"id":"6U9qTbk13Dk"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/61hYdBFweCl.png","type":"normal","altText":"PngItem_12080.png","width":266,"height":81,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":11,"yPos":16,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":57,"rotateYPos":17,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":114,"bottom":34,"altText":"PngItem_12080.png","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":0,"yPos":0,"width":114,"height":34,"strokewidth":0}},"width":114,"height":34,"resume":true,"useHandCursor":true,"id":"5w4REuQMbK7"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5jIEuJRb9QN_2024122166","id":"01","linkId":"txt__default_5jIEuJRb9QN","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":628,"height":37,"valign":"top","wordwrap":false,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Please do not turn off the device or close the browser.","style":{"fontSize":20,"fontIsItalic":false,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","fontFamily":"\\"Open SansItalic CItalicC6FA076B\\",\\"Open Sans\\"","ascent":28.503,"descent":7.813,"leading":0,"underlinePosition":-2.005,"underlineThickness":1.328,"xHeight":14.271}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":55,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":638,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":9}}}],"shapemaskId":"","xPos":155,"yPos":334,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":23.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":47,"altText":"Please do not turn off the device or close the browser.","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":47,"strokewidth":0}},"width":648,"height":47,"resume":true,"useHandCursor":true,"id":"5jIEuJRb9QN"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5o5whjbtQdu_CorrectReview","id":"01","linkId":"5o5whjbtQdu_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":521,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":11}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":10}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"5o5whjbtQdu_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5o5whjbtQdu_IncorrectReview","id":"01","linkId":"5o5whjbtQdu_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":529,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":13}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"5o5whjbtQdu_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');