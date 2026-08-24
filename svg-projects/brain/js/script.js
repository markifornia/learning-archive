/**
* @author Mark Matanza
*
* Library Dependencies
*
* @version jQuery v3.4.1
* @version Bootstrap v5.3.8
* @version PopperJS v2.11.8
*
*/

(function($) {

  $(document).ready(function() {

    /* Global Config */
    // usage: brainConfig.<key>

    var brainConfig = {

      // Colors
      fillColor: '#73C067',
      dotColor: '#00456B',
      lineColor: '#00456B',

      // Brain Modal
      modalId: '#brain-modal',
      modalTitle: '#brain-modal .modal-title',
      modalBody: '#brain-modal .modal-body',
      modalClose: '.modal-content .close',

      // Events
      activeElementHover: 'active-element-hover',
      dimElementHover: 'dim-element-hover',
      activeElementClick: 'active-element-click',
      dimElementClick: 'dim-element-click',
      brainSection: '.brain-section'

    };

    /* List of Brain Regions */
    // usage: brainRegions.<region>

    var brainRegions = {

      // Prefrontal Cortex
      prefrontalCortex: {
        brainModalClass: 'prefrontal-cortex-modal',
        brainSection: '#prefrontal-cortex-section',
        brainGroup: '.prefrontal-cortex-group',
        brainLabel: 'Prefrontal Cortex',
        brainContent: '<ul><li>The prefrontal cortex helps the brain regulate emotions, make decisions, and develop memories.</li><li>Prefrontal cortex dysfunction has been linked to clinical depression.</li></ul>'
      },

      // Frontal Lobe
      frontalLobe: {
        brainModalClass: 'frontal-lobe-modal',
        brainSection: '#frontal-lobe-section',
        brainGroup: '.frontal-lobe-group',
        brainLabel: 'Frontal Lobe',
        brainContent: '<ul><li>The frontal lobe controls emotional expression, problem-solving, and other cognitive functions.</li><li>A lack of gamma-amino butyric acid in the frontal lobe can trigger anxiety and anxiety disorders.</li><li>A lack of dopamine an/or serotonin in the frontal lobe can trigger depression symptoms.</li></ul>'
      },

      // Thalamus
      thalamus: {
        brainModalClass: 'thalamus-modal',
        brainSection: '#thalamus-section',
        brainGroup: '.thalamus-group',
        brainLabel: 'Thalamus',
        brainContent: '<ul><li>The thalamus helps the body regulate arousal, mood, ando motor functions.</li><li>Thalamus problems can trigger bipolar depression.</li></ul>'
      },

      // Amygdala
      amygdala: {
        brainModalClass: 'amygdala-modal',
        brainSection: '#amygdala-section',
        brainGroup: '.amygdala-group',
        brainLabel: 'Amygdala',
        brainContent: '<ul><li>The amygdala helps the brian process emotions.</li><li>Increased activity in the amygdala has been linked to depression.</li><li>People dealing with major depressive disorder (MDD) tend to have an enlarged and hyperactive amygdala that can disrupt sleep and activity patterns.</li></ul>'
      },

      // Cerebellum
      cerebellum: {
        brainModalClass: 'cerebellum-modal',
        brainSection: '#cerebellum-section',
        brainGroup: '.cerebellum-group',
        brainLabel: 'Cerebellum',
        brainContent: "<ul><li>The cerebellum receives information from the brain's sensory systems and uses this information to coordinate balance, posture, and other motor movements.</li><li>A lack of epinephrine in the cerebellum can trigger depression.</li></ul>"
      },

      // Hippocampus
      hippocampus: {
        brainModalClass: 'hippocampus-modal',
        brainSection: '#hippocampus-section',
        brainGroup: '.hippocampus-group',
        brainLabel: 'Hippocampus',
        brainContent: "<ul><li>The hippocampus supports long-term memory.</li><li>Ongoing exposure to stress hormones affects the growth of nerve cells in the hippocampus.</li><li>The hippocampus tends to be smaller in people dealing with depression.</li></ul>"
      },

      // Temporal Lobe
      temporalLobe: {
        brainModalClass: 'temporal-lobe-modal',
        brainSection: '#temporal-lobe-section',
        brainGroup: '.temporal-lobe-group',
        brainLabel: 'Temporal Lobe',
        brainContent: "<ul><li>The temporal lobe receives sensory information and helps the brain understand the meaning of this information.</li><li>Temporal lobe neurotransmitters acetylcholine and norepinephrine can trigger depression.</li><li>Too much acetylcholine can trigger depression.</li><li>A lack of norepinephrine can trigger depression.</li></ul>"
      }

    };

    /* Wire Up Brain Region Interactions */
    var activeRegion = null;

    Object.keys(brainRegions).forEach(function(key) {

      var region = brainRegions[key];

      $(region.brainGroup).on({

        mouseenter: function(e) {

          $(region.brainGroup).each(function(index) {

            $(this).addClass(brainConfig.activeElementHover);

            $(brainConfig.brainSection).not(region.brainGroup).addClass(brainConfig.dimElementHover);

          });

        },
        mouseleave: function(e) {

          $(region.brainGroup).each(function(index) {

            $(this).removeClass(brainConfig.activeElementHover);

            $(brainConfig.brainSection).removeClass(brainConfig.dimElementHover);

          });

        },
        click: function(e) {

          e.preventDefault();

          activeRegion = region;

          $(region.brainGroup).each(function(index) {

            $(this).addClass(brainConfig.activeElementClick);

            $(brainConfig.brainSection).not(region.brainGroup).addClass(brainConfig.dimElementClick);

          });

          bootstrap.Modal.getOrCreateInstance(document.querySelector(brainConfig.modalId), {
            backdrop: 'static',
            keyboard: false
          }).show();

          $(brainConfig.modalId).addClass(region.brainModalClass);

          // Title
          $(brainConfig.modalTitle).html(region.brainLabel);

          // Description
          $(brainConfig.modalBody).html(region.brainContent);

        }
      });

    });

    /* Manage Modal Close */
    $(brainConfig.modalClose).on('click', function(e) {

      if (!activeRegion) {
        return;
      }

      $(brainConfig.modalId).removeClass(activeRegion.brainModalClass);

      $(activeRegion.brainGroup).each(function(index) {

        $(this).removeClass(brainConfig.activeElementClick);
        $(brainConfig.brainSection).removeClass(brainConfig.dimElementClick);

      });

    });

  });

})(jQuery);
