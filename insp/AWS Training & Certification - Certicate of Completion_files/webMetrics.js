/** Copyright 2019 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["jquery","windowHelper","stringHelper","marketoMunchkinJs"],function($,a,b,c){var d=function(){};return d.marketoAccountId=MarketoAccountId,d.hiddenPageName=$("#hiddenWebAnalyticsPageName"),d.munchkinConfiguration={},d.sendWebMetricsToOmniture=function(){var c;c=this.hiddenPageName.val(),b.isStringNullOrWhiteSpace(c)&&(c=a.getLocationObject().href),"undefined"!=typeof s&&(s.pageName=c,s.t())},d.initializeMarketo=function(){Munchkin.init(d.marketoAccountId)},d});