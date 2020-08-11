// solid icon
import psCaretDownData from './icons/psCaretDown'
import psFolderData from './icons/psFolder'
import psAddAltData from './icons/psAddAlt'
import psConfirmData from './icons/psConfirm'
import psRepositoryData from './icons/psRepository'
import psRepositoryGroupData from './icons/psRepositoryGroup'
import psMembersData from './icons/psMembers'
import psFileData from './icons/psFile'
import psLogData from './icons/psLog'
import psTagData from './icons/psTag'
import psSettingData from './icons/psSetting'
import psMergeData from './icons/psMerge'
import psCommitData from './icons/psCommit'
import psBranchData from './icons/psBranch'
import psClockData from './icons/psClock'
import psTrashData from './icons/psTrash'
import psTicketData from './icons/psTicket'
import psStarData from './icons/psStar'
import psClockRingData from './icons/psClockRing'
import psPlayData from './icons/psPlay'
import psCreditCardsData from './icons/psCreditCards'
import psBookMarkFolderData from './icons/psBookMarkFolder'
import psCommentData from './icons/psComment'
import psPauseData from './icons/psPause'
import psMoreData from './icons/psMore'
import psNewFeatureData from './icons/psNewFeature'
import psCheckboxData from './icons/psCheckbox'
import psOverviewData from './icons/psOverview'
import psContentData from './icons/psContent'
import psBookData from './icons/psBook'
import psMemberAltData from './icons/psMemberAlt'
import psBellData from './icons/psBell'
import psAddData from './icons/psAdd'
import psHomeData from './icons/psHome'
import psPieChartData from './icons/psPieChart'
import psExclamationTriangleData from './icons/psExclamationTriangle'
import psMeterData from './icons/psMeter'
import psCalendarData from './icons/psCalendar'
import psBoxData from './icons/psBox'
import psAlarmData from './icons/psAlarm'
import psChartData from './icons/psChart'
import psCloudCheckData from './icons/psCloudCheck'

// line frame icon
import plRepositoryData from './icons/plRepository'
import plCodeFileData from './icons/plCodeFile'
import plBranchData from './icons/plBranch'
import plExpandData from './icons/plExpand'
import plFileData from './icons/plFile'
import plTrashData from './icons/plTrash'
import plMergeData from './icons/plMerge'
import plCopyData from './icons/plCopy'
import plSafeData from './icons/plSafe'
import plImportData from './icons/plImport'
import plHelpData from './icons/plHelp'
import plMemberData from './icons/plMember'
import plSortDescData from './icons/plSortDesc'
import plCommitData from './icons/plCommit'
import plSearchData from './icons/plSearch'
import plTagData from './icons/plTag'
import plFilterData from './icons/plFilter'
import plEditData from './icons/plEdit'
import plAngleLeftData from './icons/plAngleLeft'
import plSettingData from './icons/plSetting'
import plChatData from './icons/plChat'
import plBellData from './icons/plBell'
import plForkData from './icons/plFork'
import plUploadData from './icons/plUpload'
import plUnderlineData from './icons/plUnderline'
import plDownloadData from './icons/plDownload'
import plSourceData from './icons/plSource'
import plFullScreenData from './icons/plFullScreen'
import plCloseData from './icons/plClose'
import plShareData from './icons/plShare'
import plFolderData from './icons/plFolder'
import plStrikeData from './icons/plStrike'
import plBoldData from './icons/plBold'
import plCooperateData from './icons/plCooperate'
import plImageData from './icons/plImage'
import plFontData from './icons/plFont'
import plConfirmData from './icons/plConfirm'
import plAlignCenterData from './icons/plAlignCenter'
import plAlignRightData from './icons/plAlignRight'
import plAlignLeftData from './icons/plAlignLeft'
import plUnknownFileData from './icons/plUnknownFile'
import plUndoData from './icons/plUndo'
import plMemoData from './icons/plMemo'
import plAngleDownData from './icons/plAngleDown'
import plMemberSettingData from './icons/plMemberSetting'
import plRepairData from './icons/plRepair'
import plScrollData from './icons/plScroll'
import plMemberAltData from './icons/plMemberAlt'
import plItalicData from './icons/plItalic'
import plListData from './icons/plList'
import plCalendarData from './icons/plCalendar'
import plClockData from './icons/plClock'
import plUpdateLogData from './icons/plUpdateLog'
import plOrderListData from './icons/plOrderList'
import plStarData from './icons/plStar'
import plCheckboxData from './icons/plCheckbox'
import plAddData from './icons/plAdd'
import plAddAltData from './icons/plAddAlt'
import plClockRingData from './icons/plClockRing'
import plBookMarkFolderData from './icons/plBookMarkFolder'
import plLocalizationData from './icons/plLocalization'
import plBookData from './icons/plBook'
import plSpeakerData from './icons/plSpeaker'
import plDraftData from './icons/plDraft'
import plTableData from './icons/plTable'
import plCommentData from './icons/plComment'
import plMemberInfoData from './icons/plMemberInfo'
import plExitData from './icons/plExit'
import plCheckData from './icons/plCheck'
import plPickerData from './icons/plPicker'
import plLinkData from './icons/plLink'
import plAttachmentData from './icons/plAttachment'
import plSettingAltData from './icons/plSettingAlt'
import plContentData from './icons/plContent'
import plKeyData from './icons/plKey'
import plMenuCollapseData from './icons/plMenuCollapse'
import plCloudUpData from './icons/plCloudUp'

let warpper = function (name, size, path0, path1) {
  return {
    prefix: 'pg',
    iconName: name,
    icon: [size[0], size[1], [], 'e000', [path1, path0]]
  }
}

// solid icon
let psCaretDown = warpper(...psCaretDownData)
let psFolder = warpper(...psFolderData)
let psAddAlt = warpper(...psAddAltData)
let psConfirm = warpper(...psConfirmData)
let psRepository = warpper(...psRepositoryData)
let psRepositoryGroup = warpper(...psRepositoryGroupData)
let psMembers = warpper(...psMembersData)
let psFile = warpper(...psFileData)
let psLog = warpper(...psLogData)
let psTag = warpper(...psTagData)
let psSetting = warpper(...psSettingData)
let psMerge = warpper(...psMergeData)
let psCommit = warpper(...psCommitData)
let psBranch = warpper(...psBranchData)
let psClock = warpper(...psClockData)
let psTrash = warpper(...psTrashData)
let psTicket = warpper(...psTicketData)
let psStar = warpper(...psStarData)
let psClockRing = warpper(...psClockRingData)
let psPlay = warpper(...psPlayData)
let psCreditCards = warpper(...psCreditCardsData)
let psBookMarkFolder = warpper(...psBookMarkFolderData)
let psComment = warpper(...psCommentData)
let psPause = warpper(...psPauseData)
let psMore = warpper(...psMoreData)
let psNewFeature = warpper(...psNewFeatureData)
let psCheckbox = warpper(...psCheckboxData)
let psOverview = warpper(...psOverviewData)
let psContent = warpper(...psContentData)
let psBook = warpper(...psBookData)
let psMemberAlt = warpper(...psMemberAltData)
let psBell = warpper(...psBellData)
let psAdd = warpper(...psAddData)
let psHome = warpper(...psHomeData)
let psPieChart = warpper(...psPieChartData)
let psExclamationTriangle = warpper(...psExclamationTriangleData)
let psMeter = warpper(...psMeterData)
let psCalendar = warpper(...psCalendarData)
let psBox = warpper(...psBoxData)
let psAlarm = warpper(...psAlarmData)
let psChart = warpper(...psChartData)
let psCloudCheck = warpper(...psCloudCheckData)

// line frame icon
let plRepository = warpper(...plRepositoryData)
let plCodeFile = warpper(...plCodeFileData)
let plBranch = warpper(...plBranchData)
let plExpand = warpper(...plExpandData)
let plFile = warpper(...plFileData)
let plTrash = warpper(...plTrashData)
let plMerge = warpper(...plMergeData)
let plCopy = warpper(...plCopyData)
let plSafe = warpper(...plSafeData)
let plImport = warpper(...plImportData)
let plHelp = warpper(...plHelpData)
let plMember = warpper(...plMemberData)
let plSortDesc = warpper(...plSortDescData)
let plCommit = warpper(...plCommitData)
let plSearch = warpper(...plSearchData)
let plTag = warpper(...plTagData)
let plFilter = warpper(...plFilterData)
let plEdit = warpper(...plEditData)
let plAngleLeft = warpper(...plAngleLeftData)
let plSetting = warpper(...plSettingData)
let plChat = warpper(...plChatData)
let plBell = warpper(...plBellData)
let plFork = warpper(...plForkData)
let plUpload = warpper(...plUploadData)
let plUnderline = warpper(...plUnderlineData)
let plDownload = warpper(...plDownloadData)
let plSource = warpper(...plSourceData)
let plFullScreen = warpper(...plFullScreenData)
let plClose = warpper(...plCloseData)
let plShare = warpper(...plShareData)
let plFolder = warpper(...plFolderData)
let plStrike = warpper(...plStrikeData)
let plBold = warpper(...plBoldData)
let plCooperate = warpper(...plCooperateData)
let plImage = warpper(...plImageData)
let plFont = warpper(...plFontData)
let plConfirm = warpper(...plConfirmData)
let plAlignCenter = warpper(...plAlignCenterData)
let plAlignRight = warpper(...plAlignRightData)
let plAlignLeft = warpper(...plAlignLeftData)
let plUnknownFile = warpper(...plUnknownFileData)
let plUndo = warpper(...plUndoData)
let plMemo = warpper(...plMemoData)
let plAngleDown = warpper(...plAngleDownData)
let plMemberSetting = warpper(...plMemberSettingData)
let plRepair = warpper(...plRepairData)
let plScroll = warpper(...plScrollData)
let plMemberAlt = warpper(...plMemberAltData)
let plItalic = warpper(...plItalicData)
let plList = warpper(...plListData)
let plCalendar = warpper(...plCalendarData)
let plClock = warpper(...plClockData)
let plUpdateLog = warpper(...plUpdateLogData)
let plOrderList = warpper(...plOrderListData)
let plStar = warpper(...plStarData)
let plCheckbox = warpper(...plCheckboxData)
let plAdd = warpper(...plAddData)
let plAddAlt = warpper(...plAddAltData)
let plClockRing = warpper(...plClockRingData)
let plBookMarkFolder = warpper(...plBookMarkFolderData)
let plLocalization = warpper(...plLocalizationData)
let plBook = warpper(...plBookData)
let plSpeaker = warpper(...plSpeakerData)
let plDraft = warpper(...plDraftData)
let plTable = warpper(...plTableData)
let plComment = warpper(...plCommentData)
let plMemberInfo = warpper(...plMemberInfoData)
let plExit = warpper(...plExitData)
let plCheck = warpper(...plCheckData)
let plPicker = warpper(...plPickerData)
let plLink = warpper(...plLinkData)
let plAttachment = warpper(...plAttachmentData)
let plSettingAlt = warpper(...plSettingAltData)
let plContent = warpper(...plContentData)
let plKey = warpper(...plKeyData)
let plMenuCollapse = warpper(...plMenuCollapseData)
let plCloudUp = warpper(...plCloudUpData)

export {
  // solid icon
  psCaretDown, psFolder, psAddAlt, psConfirm, psRepository, psRepositoryGroup,
  psMembers, psFile, psLog, psTag, psSetting, psMerge, psCommit, psBranch,
  psClock, psTrash, psTicket, psStar, psClockRing, psPlay, psCreditCards,
  psBookMarkFolder, psComment, psPause, psMore, psNewFeature, psCheckbox,
  psOverview, psContent, psBook, psMemberAlt, psBell, psAdd, psHome, psPieChart,
  psExclamationTriangle, psMeter, psCalendar, psBox, psAlarm, psChart, psCloudCheck,

  // line frame icon
  plRepository, plCodeFile, plBranch, plExpand, plFile, plTrash, plMerge,
  plCopy, plSafe, plImport, plHelp, plMember, plSortDesc, plCommit, plSearch,
  plTag, plFilter, plEdit, plAngleLeft, plSetting, plChat, plBell, plFork,
  plUpload, plUnderline, plDownload, plSource, plFullScreen, plClose, plShare,
  plFolder, plStrike, plBold, plCooperate, plImage, plFont, plConfirm,
  plAlignCenter, plAlignRight, plAlignLeft, plUnknownFile, plUndo, plMemo,
  plAngleDown, plMemberSetting, plRepair, plScroll, plMemberAlt, plItalic,
  plList, plCalendar, plClock, plUpdateLog, plOrderList, plStar, plCheckbox,
  plAdd, plAddAlt, plClockRing, plBookMarkFolder, plLocalization, plBook,
  plSpeaker, plDraft, plTable, plComment, plMemberInfo, plExit, plCheck,
  plPicker, plLink, plAttachment, plSettingAlt, plContent, plKey, plMenuCollapse,
  plCloudUp
}
