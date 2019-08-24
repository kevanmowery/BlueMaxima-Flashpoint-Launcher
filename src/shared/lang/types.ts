export type LangContainer = {
  config: ConfigLang;
  home: HomeLang;
  logs: LogsLang;
  app: AppLang;
  game: GameLang;
  developer: DeveloperLang;
  about: AboutLang;
  browse: BrowseLang;
  curate: CurateLang;
  misc: MiscLang;
}

type LangObject<T extends string> = {
  [key in T]: string;
};

export type ConfigLang = LangObject<
  'configHeader' |
  'configDesc' |
  'preferencesHeader' |
  'extremeGames' |
  'extremeGamesDesc' |
  'enableEditing' |
  'enableEditingDesc' |
  'flashpointHeader' |
  'flashpointPath' |
  'flashpointPathDesc' |
  'redirector' |
  'redirectorFiddler' |
  'redirectorDesc' |
  'useWine' |
  'useWineDesc' |
  'visualsHeader' |
  'useCustomTitleBar' |
  'useCustomTitleBarDesc' |
  'theme' |
  'noTheme' |
  'themeDesc' |
  'advancedHeader' |
  'showDeveloperTab' |
  'showDeveloperTabDesc' |
  'saveAndRestart' |
  'browse'
>;

export type HomeLang = LangObject<
  'quickStartHeader' |
  'hallOfFameInfo' |
  'hallOfFame' |
  'allGamesInfo' |
  'allGames' |
  'allAnimationsInfo' |
  'allAnimations' |
  'configInfo' |
  'config' |
  'helpInfo' |
  'help' |
  'upgradesHeader' |
  'installComplete' |
  'alreadyInstalled' |
  'download' |
  'extrasHeader' |
  'favouritesPlaylist' |
  'genreList' |
  'filterByPlatform' |
  'plannedFeatures' |
  'notesHeader' |
  'notes' |
  'randomPicks'
>;

export type LogsLang = LangObject<
  'filters' |
  'copyText' |
  'clearLog'
>;

export type AppLang = LangObject<
  'home' |
  'browse' |
  'arcade' |
  'theatre' |
  'logs' |
  'config' |
  'about' |
  'curate' |
  'developer' |
  'searchPlaceholder' |
  'hideRightSidebar' |
  'showRightSidebar' |
  'hideLeftSidebar' |
  'showLeftSidebar' |
  'total' |
  'newGame' |
  'list' |
  'grid'
>;

export type GameLang = LangObject<
  'dateAdded' |
  'genre' |
  'platform' |
  'series' |
  'title' |
  'ascending' |
  'descending'
>;

export type DeveloperLang = LangObject<
  'developerHeader' |
  'developerDesc' |
  'checkMissingImages' |
  'checkMissingImagesDesc' |
  'checkGameIds' |
  'checkGameIdsDesc' |
  'checkGameTitles' |
  'checkGameTitlesDesc' |
  'checkGameFields' |
  'checkGameFieldsDesc' |
  'checkPlaylists' |
  'checkPlaylistsDesc' |
  'checkGameFileLocation' |
  'checkGameFileLocationDesc' |
  'renameImagesTitleToId' |
  'renameImagesTitleToIdDesc' |
  'renameImagesIdToTitle' |
  'renameImagesIdToTitleDesc' |
  'createMissingFolders' |
  'createMissingFoldersDesc'
>;

export type AboutLang = LangObject<
  'aboutHeader' |
  'flashpoint' |
  'flashpointDesc' |
  'website' |
  'flashpointLauncher' |
  'flashpointLauncherDesc' |
  'version' |
  'license' |
  'licenseInfo' |
  'creditsHeader'
>;

export type BrowseLang = LangObject<
  'noTitle' |
  'by' |
  'noDeveloper' |
  'genre' |
  'noGenre' |
  'series' |
  'noSeries' |
  'publisher' |
  'noPublisher' |
  'source' |
  'noSource' |
  'platform' |
  'noPlatform' |
  'playMode' |
  'noPlayMode' |
  'status' |
  'noStatus' |
  'version' |
  'noVersion' |
  'releaseDate' |
  'noReleaseDate' |
  'language' |
  'noLanguage' |
  'dateAdded' |
  'brokenInInfinity' |
  'extreme' |
  'playlistNotes' |
  'noPlaylistNotes' |
  'notes' |
  'noNotes' |
  'originalDescription' |
  'noOriginalDescription' |
  'additionalApplications' |
  'noName' |
  'launch' |
  'new' |
  'commandLine' |
  'noCommandLine' |
  'autoRunBefore' |
  'waitForExit' |
  'applicationPath' |
  'noApplicationPath' |
  'launchCommand' |
  'noLaunchCommand' |
  'thumbnail' |
  'screenshot' |
  'dropImageHere' |
  'noGameSelected' |
  'clickToSelectGame' |
  'failedToLoadPlaylistFolder' |
  'checkLogForInfo' |
  'loadingPlaylists' |
  'titlePlaceholder' |
  'author' |
  'authorPlaceholder'
>;

export type CurateLang = LangObject<
  'loadMeta' |
  'loadMetaDesc' |
  'loadArchive' |
  'loadArchiveDesc' |
  'loadFolder' |
  'loadFolderDesc'
>;

export type MiscLang = LangObject<
  'blankNotFound' |
  'addBlank' |
  'removeBlank'
>;



