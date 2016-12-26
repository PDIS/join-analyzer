import { JoinAnalyzerPage } from './app.po';

describe('join-analyzer App', function() {
  let page: JoinAnalyzerPage;

  beforeEach(() => {
    page = new JoinAnalyzerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
